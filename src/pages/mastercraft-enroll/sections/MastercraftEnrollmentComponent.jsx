import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Palette } from "lucide-react";
import { Fragment, useState } from "react";
import useEnroll from "../../../hooks/Mutations/mastercraft/useEnroll";
import Payment from "./Payment";
import PersonalInformation from "./PersonalInformation";
import Qualifications from "./Qualifications";

function MastercraftEnrollmentComponent() {
  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    mutate: enrollMastercraft,
    isPending,
    isSuccess: enrollmentSuccess,
    isError: enrollmentError,
    error: enrollmentErrorMessage,
  } = useEnroll();

  const [formData, setFormData] = useState({
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

  const reformattedFormData = {
    profile: {
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      github_link: formData.github,
      project_link: formData.project,
      linkedin_url: formData.linkedIn,
      objective: formData.objective,
      duration_of_experience: formData.experienceYears,
      collaboration_tools_familiarity: formData.collaborationTools,
      daily_learning_hours: formData.dailyHours,
      referral_source: formData.referralSource,
      standup_day: formData.availableDay,
    },
    program_name: "PRODUCT_DESIGNs",
    mpesa_phone_number: formData.paymentPhoneNumber,
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    if (index < 3) {
      setIndex((prev) => prev + 1);
    }
    if (index === 3) {
      if (formData.termsOfUse) {
        console.log("second", reformattedFormData);
        openModal();
        // enrollMastercraft(reformattedFormData);
        if (enrollmentSuccess) {
          alert("Enrollment successful");
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
        }
        if (enrollmentError) {
          alert("Enrollment failed");
          console.error("Enrollment error:", enrollmentErrorMessage);
        }
      } else {
        alert("Please accept the terms of use");
        setIsProcessing(false);
        return;
      }
    }
    setTimeout(() => setIsProcessing(false), 300);
  };

  const handleBack = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    if (index > 1) {
      setIndex((prev) => prev - 1);
    }
    setTimeout(() => setIsProcessing(false), 300);
  };

  return (
    <div className="border-t pt-4 w-full">
      <section className="border-2 border-white w-full bg-[#E8F4F1] p-8 rounded-2xl flex flex-col gap-6">
        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
          <h4 className="text-lg font-normal text-[#2E2E2E]">
            I&apos;m enrolling for the Mastercraft program, in{" "}
            <span className="font-semibold">Product Design</span>
          </h4>

          <div className="bg-[#2A67583D] rounded-full border-2 border-white p-2.5 flex-center">
            <p className="text-sm text-[#2E2E2E] font-extrabold">
              121 <span className="font-normal">have already enrolled</span>
            </p>
          </div>
        </div>
        {/* Progress */}
        <div className="flex items-center justify-between w-full gap-5 mt-5">
          <div className="w-1/3 bg-primary h-1 rounded-sm" />
          <div
            className={`w-1/3 h-1 rounded-sm ${index > 1 ? "bg-primary" : "bg-[#BAC6C3]"}`}
          />
          <div
            className={`w-1/3 h-1 rounded-sm ${index > 2 ? "bg-primary" : "bg-[#BAC6C3]"}`}
          />
        </div>

        {index === 1 && (
          <PersonalInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {index === 2 && (
          <Qualifications
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {index === 3 && (
          <Payment formData={formData} handleInputChange={handleInputChange} />
        )}

        {index === 3 && (
          <div className="flex md:items-center gap-2">
            <div className="relative flex items-center justify-center w-5 h-5 rounded-sm">
              <input
                type="checkbox"
                name="termsOfUse"
                id="termsOfUse"
                className="size-5 peer shrink-0 appearance-none border-2 border-primary rounded-sm bg-white checked:border-primary"
                value={formData.termsOfUse}
                checked={formData.termsOfUse}
                required
                onChange={(e) => {
                  handleInputChange("termsOfUse", e.target.checked);
                }}
              />
              <svg
                className="absolute top-0 left-0 size-5 hidden peer-checked:block pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#009975"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <label
              htmlFor="termsOfUse"
              className="text-sm text-[#2E2E2E] font-normal"
            >
              I agree to the{" "}
              <span className="text-primary font-semibold">Terms of Use</span>{" "}
              <span className="text-primary font-semibold">
                , Refund Policy
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">Privacy Policy</span>
            </label>
          </div>
        )}

        <div className="flex items-center justify-between w-full gap-5 mt-5">
          <button
            type="button"
            disabled={isProcessing}
            onClick={handleBack}
            className={`text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center ${index === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
          >
            {index === 3 ? "Pay" : "Continue"}
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => closeModal()}
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
                data-testid="enrolmentSuccess-popup"
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
                      <svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M39.9002 7.44156L44.3011 11.1842C45.2601 11.9996 46.4512 12.493 47.706 12.5946L53.4642 13.0599C56.3976 13.297 58.7264 15.6258 58.9635 18.5592L59.4289 24.3174C59.5305 25.5722 60.0239 26.7633 60.8393 27.7224L64.5819 32.1231C66.4883 34.3649 66.4883 37.6584 64.5819 39.9002L60.8393 44.3011C60.0238 45.2601 59.5304 46.4512 59.4288 47.706L58.9633 53.4642C58.7264 56.3976 56.3975 58.7264 53.4642 58.9635L47.706 59.4289C46.4513 59.5305 45.2601 60.0239 44.3011 60.8393L39.9002 64.5819C37.6584 66.4883 34.3649 66.4883 32.1231 64.5819L27.7224 60.8393C26.7633 60.0238 25.5722 59.5304 24.3174 59.4288L18.5592 58.9633C15.6258 58.7264 13.297 56.3975 13.0599 53.4642L12.5945 47.706C12.4929 46.4512 11.9995 45.2601 11.184 44.3011L7.44156 39.9002C5.53511 37.6584 5.53511 34.3649 7.44156 32.1231L11.1842 27.7224C11.9996 26.7633 12.493 25.5722 12.5946 24.3174L13.0599 18.5592C13.297 15.6258 15.6258 13.297 18.5592 13.0599L24.3174 12.5945C25.5722 12.4929 26.7633 11.9995 27.7224 11.184L32.1231 7.44156C34.3649 5.53511 37.6584 5.53511 39.9002 7.44156ZM47.2971 25.2817L33 39.6565L26.1212 32.7777L21.879 37.0198L33 48.141L51.5394 29.5239L47.2971 25.2817Z"
                          fill="#1F702D"
                        />
                      </svg>

                      <div className="space-y-4">
                        <DialogTitle
                          as="h3"
                          className="text-base md:text-lg font-medium leading-5 md:leading-6 text-gray-900"
                        >
                          Congratulations!
                        </DialogTitle>

                        <Description className="text-sm md:text-sm font-normal text-[#2E2E2E] max-w-[420px]">
                          Thank you for joining the Mastercraft Program in UI/UX
                          Design. We look forward to collaborating with you to
                          offer value beyond the ordinary!
                        </Description>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-6 border border-red-600 items-center md:items-start">
                      <div className="bg-[#F8F8F8] md:bg-transparent rounded-lg w-full flex flex-col md:flex-row gap-3 items-center justify-between border border-blue-500 py-2 md:py-0">
                        <div className="md:w-3/5 flex items-center gap-2 md:gap-4">
                          <div className="size-14 md:size-16 border-2 border-white rounded-md flex-center p-2 md:p-2.5 bg-[#E9F4F1]">
                            <Palette color="green" size={32} />
                          </div>

                          <div className="flex flex-col gap-2 items-start font-inter">
                            <h5 className="text-sm text-black font-medium">
                              UI/UX Designer
                            </h5>
                            <p className="text-xs text-[#686868] font-normal">
                              Mastercraft Internship ● 8 weeks
                            </p>
                          </div>
                        </div>

                        <div className="md:py-5 md:px-8">
                          <h4 className="text-green-dark font-semibold text-base font-inter">
                            <span className="text-xs">KES</span>{" "}
                            {new Intl.NumberFormat("en-US", {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }).format(2800)}
                          </h4>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-label="Partner with us"
                        className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-full text-center"
                        data-testid="partner-with-us"
                      >
                        Join our Slack Channel
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </div>
  );
}

export default MastercraftEnrollmentComponent;
