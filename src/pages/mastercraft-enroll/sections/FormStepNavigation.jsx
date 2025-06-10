/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";

function FormStepNavigation({
  currentStep,
  isProcessing,
  isPending,
  onBack,
  onContinue,
}) {
  return (
    <div className="flex items-center justify-between w-full gap-5 mt-5">
      <button
        type="button"
        disabled={isProcessing || isPending || currentStep === 1}
        onClick={onBack}
        className={`text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Go back to previous step"
      >
        Back
      </button>
      <button
        type="button"
        onClick={onContinue}
        disabled={isProcessing || isPending}
        className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
        aria-label={
          currentStep === 3 ? "Complete payment" : "Continue to next step"
        }
      >
        {isPending ? "Processing..." : currentStep === 3 ? "Pay" : "Continue"}
      </button>
    </div>
  );
}

export default FormStepNavigation;

FormStepNavigation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};
