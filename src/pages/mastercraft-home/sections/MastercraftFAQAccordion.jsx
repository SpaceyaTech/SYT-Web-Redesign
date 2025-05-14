/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function MastercraftFAQAccordion({ questions = [] }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center gap-4 w-full max-w-full mx-auto font-poppins">
      {questions.map(
        ({ id, title, description, description2, list }, index) => (
          <div
            key={id}
            className="bg-white rounded-lg md:rounded-xl border px-4 py-3 md:p-6 border-[#33333326]"
          >
            <section id={`flush-heading${index + 1}`}>
              <button
                aria-label={title}
                className={`group relative flex w-full md:items-center rounded-none text-left text-base md:text-lg transition ${
                  activeQuestion === index
                    ? ""
                    : "overflow-anchor:none hover:z-[2] focus:z-[3]"
                } focus:outline-none ${
                  activeQuestion === index
                    ? "font-normal"
                    : "&:not([data-te-collapse-collapsed]):text-primary"
                } ${
                  activeQuestion === index
                    ? "boxShadow:inset_0_-1px_0_rgba(229,231,235)"
                    : "&:not([data-te-collapse-collapsed]):boxShadow:inset_0_-1px_0_rgba(229,231,235)"
                } dark:&:not([data-te-collapse-collapsed]):text-primary-400`}
                type="button"
                data-te-collapse-init
                data-te-target={`#flush-collapse${index + 1}`}
                aria-expanded={activeQuestion === index ? "true" : "false"}
                aria-controls={`flush-collapse${index + 1}`}
                onClick={() => toggleQuestion(index)}
              >
                <h4 className="font-poppins text-base md:text-lg text-gray-800 font-semibold">
                  {title}
                </h4>
                <span className="ml-auto h-10 w-10 shrink-0 text-black rounded-md flex md:items-center justify-end md:justify-center overflow-hidden">
                  {activeQuestion === index ? (
                    <FiMinusCircle />
                  ) : (
                    <FiPlusCircle />
                  )}
                </span>
              </button>
            </section>
            <div
              id={`flush-collapse${index + 1}`}
              className={`${
                activeQuestion === index ? "" : "invisible hidden"
              } border-0 md:mt-2 pr-5 md:pr-12`}
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby={`flush-heading${index + 1}`}
              data-te-parent="#accordionFlushExample"
            >
              {!list ? (
                <p className="font-poppins text-sm md:text-base text-gray-600 font-normal">
                  {description}
                </p>
              ) : (
                <div className="flex flex-col gap-2 font-poppins text-sm md:text-base text-gray-600 font-normal">
                  <p>{description}</p>

                  <ul className="list-disc pl-6">
                    {list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>

                  {description2 && <p>{description2}</p>}
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default MastercraftFAQAccordion;
