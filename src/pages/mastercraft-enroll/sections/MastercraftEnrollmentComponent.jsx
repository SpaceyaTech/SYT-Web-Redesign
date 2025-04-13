import { useState } from "react";
import Payment from "./Payment";
import PersonalInformation from "./PersonalInformation";
import Qualifications from "./Qualifications";

function MastercraftEnrollmentComponent() {
  const [index, setIndex] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

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
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    console.log("Continue clicked", index);
    if (isProcessing) return; // prevent double click
    setIsProcessing(true);

    if (index < 3) {
      setIndex((prev) => prev + 1);
    } else {
      console.log("Form submitted with data:", formData);
    }

    setTimeout(() => setIsProcessing(false), 300); // re-enable after short delay
  };

  // const handleContinue = () => {
  //   console.log("Continue clicked", index);
  //   if (index < 3) {
  //     setIndex((prev) => prev + 1);
  //   } else {
  //     console.log("Form submitted with data:", formData);
  //   }
  // };

  const handleBack = () => {
    console.log("Back clicked", index);
    if (isProcessing) return; // prevent double click
    setIsProcessing(true);
    if (index > 1) {
      setIndex((prev) => prev - 1);
    }
    setTimeout(() => setIsProcessing(false), 300); // re-enable after short delay
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
            {index === 3 ? "Submit" : "Continue"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default MastercraftEnrollmentComponent;
