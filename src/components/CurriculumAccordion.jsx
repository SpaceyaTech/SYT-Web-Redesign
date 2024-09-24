import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function CurriculumAccordion() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const questions = [
    {
      id: 1,
      title: "Introduction to Product Design",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      title: "UX Research",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 3,
      title: "IA & Ideation",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 4,
      title: "User Flows & Wireframes",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 5,
      title: "Color & Typography",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 6,
      title: "UI Components",
      description:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-full mx-auto font-openSans">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className={`${activeQuestion === index ? "bg-white rounded-lg" : "bg-transparent"} border-b px-4 py-3`}
        >
          <h2 id={`flush-heading${index + 1}`}>
            <button
              aria-label={question.title}
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
              <h4 className="font-openSans">
                Week {question.id}:{" "}
                <span className="font-semibold">{question.title}</span>
              </h4>
              <span className="ml-auto h-10 w-10 shrink-0 text-black rounded-md flex md:items-center justify-center overflow-hidden">
                {activeQuestion === index ? (
                  <FiMinusCircle />
                ) : (
                  <FiPlusCircle />
                )}
              </span>
            </button>
          </h2>
          <div
            id={`flush-collapse${index + 1}`}
            className={`${
              activeQuestion === index ? "" : "invisible hidden"
            } border-0`}
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby={`flush-heading${index + 1}`}
            data-te-parent="#accordionFlushExample"
          >
            <p className="font-openSans text-base text-gray-600 font-normal">
              {question.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurriculumAccordion;

// CurriculumAccordion.propTypes = {
//   questions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       question: PropTypes.string,
//       answer: PropTypes.string,
//     })
//   ),
// };

// CurriculumAccordion.defaultProps = {
//   questions: [],
// };
