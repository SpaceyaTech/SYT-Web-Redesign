// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "Is SpaceYaTech free?",
      answer:
        "Yes, SpaceYaTech is totally free for anyone who wishes to learn technology and contribute to Open Source",
    },
    {
      question: "Does SpaceYaTech only mentor developers?",
      answer: "No, SpaceYaTech mentors anyone who is involved in modern technology. This includes developers, designers, product managers, and more. SpaceYaTech believes that everyone has the potential to learn and grow in the tech industry, and they are committed to providing mentorship to anyone who wants it.",
    },
    {
      question: "Does SpaceYaTech pay mentors?",
      answer: "No, SpaceYaTech does not pay mentors. However, mentors do receive a number of benefits",
    },
    {
      question: "Can I collaborate with SpaceYaTech?",
      answer: "Yes, you can collaborate with SpaceYaTech in a number of ways",
    },
    {
      question: "Can I join the mentorship sessions at any time?",
      answer: "No, you cannot join the mentorship sessions at any time. SpaceYaTech's mentorship sessions are offered on a rolling basis, and there are limited spots available. To be considered for a mentorship session, you must submit an application and be selected by SpaceYaTech.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div id="accordionFlushExample">
      {questions.map((question, index) => (
        <div key={index} className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
          <h2 className="mb-4 text-white" id={`flush-heading${index + 1}`}>
            <button
              className={`group relative flex w-full items-center rounded-none border-0 py-4 px-5  text-left text-base transition ${
                activeQuestion === index ? "" : "overflow-anchor:none hover:z-[2] focus:z-[3]"
              } focus:outline-none ${
                activeQuestion === index ? "text-primary" : "&:not([data-te-collapse-collapsed]):text-primary"
              } ${
                activeQuestion === index
                  ? "box-shadow:inset_0_-1px_0_rgba(229,231,235)"
                  : "&:not([data-te-collapse-collapsed]):box-shadow:inset_0_-1px_0_rgba(229,231,235)"
              } dark:&:not([data-te-collapse-collapsed]):text-primary-400`}
              type="button"
              data-te-collapse-init
              data-te-target={`#flush-collapse${index + 1}`}
              aria-expanded={activeQuestion === index ? "true" : "false"}
              aria-controls={`flush-collapse${index + 1}`}
              onClick={() => toggleQuestion(index)}
            >
              {question.question}
              <span
                className={`ml-auto h-10 w-10 shrink-0 bg-[#CCFFF3] text-black rounded-md flex items-center justify-center overflow-hidden ${
                  activeQuestion === index ? "text-primary" : ""
                }`}
              >
                <FontAwesomeIcon icon={activeQuestion === index ? faChevronUp : faChevronDown} />
              </span>
            </button>
          </h2>
          <div
            id={`flush-collapse${index + 1}`}
            className={`${activeQuestion === index ? "" : "invisible hidden"} border-0`}
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby={`flush-heading${index + 1}`}
            data-te-parent="#accordionFlushExample"
          >
            <div className="py-4 px-5 text-white">{question.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
