/* eslint-disable react/prop-types */
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XCircle, Clock, AlertTriangle } from "lucide-react";
import { Fragment, useEffect } from "react";
import useCheckPaymentStatus from "../../../hooks/Mutations/mastercraft/useCheckPaymentStatus";
import CourseInfoCard from "./CourseInfoCard";

function PaymentStatusModal({
  isOpen,
  closeModal,
  enrollmentId,
  setEnrollmentId,
  paymentInitiated,
  setPaymentInitiated,
  onRetryPayment,
  setFormData,
  setIndex,
}) {
  const {
    isSuccess: paymentSuccess,
    isError: paymentError,
    isPending: paymentPending,
    message: paymentMessage,
    errorCode,
    checkStatus,
    attemptsCount,
    data: paymentData,
  } = useCheckPaymentStatus(enrollmentId, {
    enabled: paymentInitiated && enrollmentId !== null,
    pollingInterval: 5000,
    maxAttempts: 3,
    isOpen,
  });

  const handleCheckPayment = () => {
    if (enrollmentId) {
      checkStatus();
    }
  };

  const getErrorMessage = () => {
    if (paymentMessage === "Request cancelled by user") {
      return "You cancelled the payment request. Please try again when you're ready.";
    }

    if (errorCode === "TIMEOUT") {
      return "The payment verification timed out. Please check if the payment was completed on your M-PESA and try checking the status again.";
    }

    return (
      paymentMessage ||
      "There was an issue processing your payment. Please try again or contact support."
    );
  };

  useEffect(() => {
    if (paymentSuccess || paymentData?.message === "Payment successful") {
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        github: "",
        project: "",
        linkedIn: "",
        objective: "",
        experienceYears: "",
        professionalJourney: "",
        collaborationTools: "",
        dailyHours: "",
        referralSource: "",
        availableDay: "",
        paymentPhoneNumber: "",
        promoCode: "",
        termsOfUse: false,
      });
      setIndex(1);
    }
  }, [paymentSuccess, paymentData, setFormData, setIndex]);

  useEffect(() => {
    if (paymentInitiated && enrollmentId && isOpen) {
      checkStatus();
    }
  }, [paymentInitiated, enrollmentId, checkStatus, isOpen]);

  const handleRetryPayment = () => {
    closeModal();
    setTimeout(() => {
      onRetryPayment();
    }, 300);
  };

  const handleCancelEnrollment = () => {
    setEnrollmentId(null);
    setPaymentInitiated(false);
    closeModal();
  };

  useEffect(() => {
    if (!isOpen) {
      setEnrollmentId(null);
      setPaymentInitiated(false);
    }
  }, [isOpen, setEnrollmentId, setPaymentInitiated]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeModal}
        aria-labelledby="payment-status-dialog"
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            data-testid="enrolmentStatus-popup"
            aria-hidden="true"
          />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-[url('/confirmation-card.svg')] bg-cover p-4 md:p-12 text-center align-middle shadow-xl transition-all flex flex-col items-center gap-6">
                <div className="flex-center flex-col gap-8 pt-4">
                  {paymentPending && (
                    <div className="bg-yellow-100 rounded-full p-4">
                      <Clock color="#F59E0B" size={48} aria-hidden="true" />
                    </div>
                  )}
                  {paymentSuccess && (
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M39.9002 7.44156L44.3011 11.1842C45.2601 11.9996 46.4512 12.493 47.706 12.5946L53.4642 13.0599C56.3976 13.297 58.7264 15.6258 58.9635 18.5592L59.4289 24.3174C59.5305 25.5722 60.0239 26.7633 60.8393 27.7224L64.5819 32.1231C66.4883 34.3649 66.4883 37.6584 64.5819 39.9002L60.8393 44.3011C60.0238 45.2601 59.5304 46.4512 59.4288 47.706L58.9633 53.4642C58.7264 56.3976 56.3975 58.7264 53.4642 58.9635L47.706 59.4289C46.4513 59.5305 45.2601 60.0239 44.3011 60.8393L39.9002 64.5819C37.6584 66.4883 34.3649 66.4883 32.1231 64.5819L27.7224 60.8393C26.7633 60.0238 25.5722 59.5304 24.3174 59.4288L18.5592 58.9633C15.6258 58.7264 13.297 56.3975 13.0599 53.4642L12.5945 47.706C12.4929 46.4512 11.9995 45.2601 11.184 44.3011L7.44156 39.9002C5.53511 37.6584 5.53511 34.3649 7.44156 32.1231L11.1842 27.7224C11.9996 26.7633 12.493 25.5722 12.5946 24.3174L13.0599 18.5592C13.297 15.6258 15.6258 13.297 18.5592 13.0599L24.3174 12.5945C25.5722 12.4929 26.7633 11.9995 27.7224 11.184L32.1231 7.44156C34.3649 5.53511 37.6584 5.53511 39.9002 7.44156ZM47.2971 25.2817L33 39.6565L26.1212 32.7777L21.879 37.0198L33 48.141L51.5394 29.5239L47.2971 25.2817Z"
                        fill="#1F702D"
                      />
                    </svg>
                  )}
                  {paymentError && (
                    <div className="bg-red-100 rounded-full p-4">
                      {paymentMessage === "Request cancelled by user" ? (
                        <AlertTriangle
                          color="#F59E0B"
                          size={48}
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircle color="#EF4444" size={48} aria-hidden="true" />
                      )}
                    </div>
                  )}

                  <div className="space-y-4">
                    <DialogTitle
                      id="payment-status-dialog"
                      as="h3"
                      className="text-base md:text-lg font-medium leading-5 md:leading-6 text-gray-900"
                    >
                      {paymentPending && "Payment Processing"}
                      {paymentSuccess && "Congratulations!"}
                      {paymentError &&
                        (paymentMessage === "Request cancelled by user"
                          ? "Payment Cancelled"
                          : "Payment Failed")}
                    </DialogTitle>

                    <Description className="text-sm md:text-sm font-normal text-[#2E2E2E] max-w-[420px]">
                      {paymentPending && (
                        <>
                          We&rsquo;re processing your payment. Please check your
                          phone for the M-PESA prompt and enter your PIN to
                          complete the payment.
                        </>
                      )}
                      {paymentSuccess && (
                        <>
                          Thank you for joining the Mastercraft Program in UI/UX
                          Design. We look forward to collaborating with you to
                          offer value beyond the ordinary!
                        </>
                      )}
                      {paymentError && <p>{getErrorMessage()}</p>}
                    </Description>
                  </div>
                </div>

                {!paymentPending && (
                  <div className="w-full flex flex-col gap-6 items-center md:items-start">
                    <CourseInfoCard />

                    {paymentSuccess && (
                      <button
                        type="button"
                        aria-label="Join Slack"
                        className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-full text-center"
                        data-testid="join-slack"
                      >
                        Join our Slack Channel
                      </button>
                    )}

                    {paymentError && (
                      <div className="flex flex-col md:flex-row w-full gap-3">
                        <button
                          type="button"
                          aria-label="Try Again"
                          onClick={handleRetryPayment}
                          className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base flex-1 text-center"
                          data-testid="try-again"
                        >
                          Try Again
                        </button>
                        {paymentMessage === "Request cancelled by user" ||
                          (paymentMessage ===
                            "The initiator information is invalid." && (
                            <button
                              type="button"
                              aria-label="Contact Support"
                              onClick={handleCancelEnrollment}
                              className="text-primary bg-white border border-primary py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base flex-1 text-center"
                            >
                              Cancel Enrollment
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                )}

                {paymentPending && (
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full w-3/4 animate-pulse"
                        role="progressbar"
                        aria-label="Payment processing progress"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleCheckPayment}
                      className="mt-4 text-primary bg-white hover:bg-gray-50 border border-primary py-2 px-4 focus:outline-none rounded-lg text-sm md:text-base"
                      aria-label="Check payment status"
                    >
                      Check Payment Status
                    </button>
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PaymentStatusModal;
