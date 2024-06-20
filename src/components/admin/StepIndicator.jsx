import React from "react";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

function StepIndicator({ steps, currentStep }) {
  const noBorderRight = "border-r-0";

  return (
    <div
      className={`w-3/4 mt-10 rounded-lg items-center inline-flex ${
        steps[currentStep].status === "completed"
          ? "border-b-4 border-indigo-500"
          : "border border-gray-300"
      }`}
    >
      {steps.map((step, index) => (
        <div
          className={`h-20 border-gray-300 w-2/5  flex ${
            index === steps.length - 1 ? noBorderRight : "border-r"
          } ${
            step.status === "completed" ? "border-b-4 border-emerald-600" : ""
          }`}
          key={step.section}
        >
          <div className="justify-start items-center px-2 gap-4 inline-flex">
            <div
              className={`w-10 h-10 rounded-[20px] border-2 border-emerald-900 flex-col justify-center items-center inline-flex ${
                step.status === "completed" ? "bg-emerald-800" : ""
              }`}
            >
              <div className="text-emerald-900 text-sm px-2 font-bold leading-none">
                {step.status === "completed" ? (
                  <FaCheck className="text-[#fafafa]" />
                ) : (
                  step.section
                )}
              </div>
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-emerald-800 text-xs font-bold uppercase leading-none tracking-tight">
                {step.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
StepIndicator.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      section: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default StepIndicator;
