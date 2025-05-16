/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useState, useMemo } from "react";
import useEnroll from "../../../hooks/Mutations/mastercraft/useEnroll";
import EnrollmentHeader from "./EnrollmentHeader";
import EnrollmentProgressBar from "./EnrollmentProgressBar";
import FormStepNavigation from "./FormStepNavigation";
import Payment from "./Payment";
import PaymentStatusModal from "./PaymentStatusModal";
import PersonalInformation from "./PersonalInformation";
import Qualifications from "./Qualifications";
import TermsOfUseCheckbox from "./TermsOfUseCheckbox";

function MastercraftEnrollmentComponent() {
  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState(null);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
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

  const {
    mutate: enrollMastercraft,
    isPending: isEnrollmentPending,
    // isSuccess: enrollmentSuccess,
    // isError: enrollmentError,
    // error: enrollmentErrorMessage,
    // data: enrollmentData,
  } = useEnroll();

  const reformattedFormData = useMemo(
    () => ({
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
      program_name: "PRODUCT_DESIGN",
      mpesa_phone_number: formData.paymentPhoneNumber,
    }),
    [formData]
  );

  const closeModal = () => {
    setIsOpen(false);
    setEnrollmentId(null);
    setPaymentInitiated(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePersonalInfo = () => {
    const { fullName, email, phoneNumber } = formData;
    return fullName && email && phoneNumber;
  };

  const validateQualifications = () => {
    const {
      experienceYears,
      objective,
      collaborationTools,
      dailyHours,
      availableDay,
    } = formData;
    return (
      experienceYears &&
      objective &&
      collaborationTools &&
      dailyHours &&
      availableDay
    );
  };

  const validatePayment = () => {
    const { termsOfUse, paymentPhoneNumber } = formData;
    return termsOfUse && paymentPhoneNumber;
  };

  const handleContinue = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const hasInputData = Object.values(formData).some(
      (value) => value !== "" || typeof value === "boolean"
    );

    if (!hasInputData) {
      alert("Please fill all required fields");
      setIsProcessing(false);
      return;
    }

    let isValid = false;
    if (index === 1) {
      isValid = validatePersonalInfo();
      if (!isValid) {
        alert("Please fill all required fields in Personal Information");
        setIsProcessing(false);
        return;
      }
    } else if (index === 2) {
      isValid = validateQualifications();
      if (!isValid) {
        alert("Please fill all required fields in Qualifications");
        setIsProcessing(false);
        return;
      }
    } else if (index === 3) {
      isValid = validatePayment();
      if (!isValid) {
        alert("Please accept the terms of use and enter a valid phone number");
        setIsProcessing(false);
        return;
      }
    }

    if (index < 3) {
      setIndex((prev) => prev + 1);
      setIsProcessing(false);
      return;
    }

    if (index === 3) {
      try {
        enrollMastercraft(reformattedFormData, {
          onSuccess: (data) => {
            console.log("Enrollment successful:", data);
            if (!data && data.message !== "Payment initiated successfully") {
              alert("Enrollment successful but couldn't track payment status");
              return;
            }
            setEnrollmentId(data.enrollment_id);
            setPaymentInitiated(true);
            openModal();
          },
          onError: (error) => {
            console.error("Enrollment error:", error);
            alert(
              error?.response?.data?.message || "An unexpected error occurred"
            );
          },
        });
      } catch (error) {
        console.error("Error during enrollment process:", error);
        // alert("An unexpected error occurred");
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

  const handleRetryPayment = () => {
    closeModal();
  };

  const renderFormStep = () => {
    switch (index) {
      case 1:
        return (
          <PersonalInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <Qualifications
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <Payment formData={formData} handleInputChange={handleInputChange} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t pt-4 w-full">
      <section className="border-2 border-white w-full bg-[#E8F4F1] p-8 rounded-2xl flex flex-col gap-6">
        <EnrollmentHeader />
        <EnrollmentProgressBar currentStep={index} />

        {renderFormStep()}

        {index === 3 && (
          <TermsOfUseCheckbox
            checked={formData.termsOfUse}
            onChange={(checked) => handleInputChange("termsOfUse", checked)}
          />
        )}

        <FormStepNavigation
          currentStep={index}
          isProcessing={isProcessing}
          isPending={isEnrollmentPending}
          onBack={handleBack}
          onContinue={handleContinue}
        />

        <PaymentStatusModal
          isOpen={isOpen}
          closeModal={closeModal}
          enrollmentId={enrollmentId}
          setEnrollmentId={setEnrollmentId}
          paymentInitiated={paymentInitiated}
          setPaymentInitiated={setPaymentInitiated}
          onRetryPayment={handleRetryPayment}
          setFormData={setFormData}
          setIndex={setIndex}
        />
      </section>
    </div>
  );
}

export default MastercraftEnrollmentComponent;
