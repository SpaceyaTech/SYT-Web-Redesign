import React from "react";
import { CurriculumAccordion } from "@/components";

function Description() {
  const defaultFocusedLinkRef = React.useRef(null);

  React.useEffect(() => {
    if (defaultFocusedLinkRef.current) {
      defaultFocusedLinkRef.current.focus();
    }
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="border border-red-500 w-full flex gap-6 md:gap-12">
      <div className="w-1/5 hidden md:block border rounded-xl bg-white p-4 space-y-4 text-base h-fit pb-6">
        <h4 className="uppercase font-semibold">Product Design</h4>

        <div className="flex flex-col gap-3 text-[#767975] font-normal">
          <button
            type="button"
            onClick={() => handleScrollToSection("CourseDescription")}
            className="focus:text-green-dark focus:font-medium outline-none"
            ref={defaultFocusedLinkRef}
          >
            Course Description
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("WhoCanApply")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Who can apply
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("WhatYouWillLearn")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            What you will learn
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("Curriculum")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Curriculum
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("CourseOutcome")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Course Outcome
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("Instructors")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Instructors
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("Pricing")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Pricing
          </button>

          <button
            type="button"
            onClick={() => handleScrollToSection("NextCohort")}
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Next Cohort
          </button>
        </div>

        <button
          type="button"
          className="w-full text-white bg-green-dark rounded px-6 py-2 text-sm font-semibold transition-all border border-green-dark ease-in duration-500 hover:bg-transparent hover:text-green-dark"
        >
          Enroll
        </button>
      </div>

      <div className="w-full md:w-4/5 space-y-4 md:space-y-8">
        {/* Course Description */}
        <div className="space-y-2" id="CourseDescription">
          <h3 className="text-green-header text-xl font-semibold">
            Course Description
          </h3>
          <p className="text-grey-dark text-base leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ex
            id, sunt iste commodi voluptate incidunt veniam quod dignissimos
            labore, quibusdam voluptates, fugit dolorum nemo vel dolorem tenetur
            repudiandae omnis?
          </p>
        </div>

        <hr />

        {/* Who can apply */}
        <div className="space-y-2" id="WhoCanApply">
          <h3 className="text-green-header text-xl font-semibold">
            Who can apply
          </h3>
          <ul className="list-image-checkmark list-inside space-y-2">
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>

        <hr />

        {/* What you'll learn */}
        <div className="space-y-2" id="WhatYouWillLearn">
          <h3 className="text-green-header text-xl font-semibold">
            What you will learn
          </h3>
          <ul className="list-image-checkmark space-y-2">
            <li className="text-grey-dark text-base leading-loose ml-6">
              Understand the basics of UX research, like planning research
              studies, conducting interviews and usability studies, and
              synthesizing research results
            </li>
            <li className="text-grey-dark text-base leading-loose ml-6">
              Apply foundational UX concepts, like user-centered design,
              accessibility, and equity-focused design
            </li>
            <li className="text-grey-dark text-base leading-loose ml-6">
              Follow the design process: empathize with users, define pain
              points, ideate solutions, create wireframes and prototypes, test
              and iterate on designs
            </li>
            <li className="text-grey-dark text-base leading-loose ml-6">
              Create a professional UX portfolio that includes 3 end-to-end
              projects: a mobile app, a responsive website, and a cross-platform
              experience
            </li>
          </ul>
        </div>

        <hr />

        {/* Curriculum */}
        <div className="flex flex-col gap-3" id="Curriculum">
          <h3 className="text-green-header text-xl font-semibold">
            Curriculum
          </h3>

          <CurriculumAccordion />
        </div>

        <hr />

        {/* Course Outcome */}
        <div className="space-y-2" id="WhoCanApply">
          <h3 className="text-green-header text-xl font-semibold">
            Course Outcome
          </h3>
          <ul className="list-image-checkmark list-inside space-y-2">
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
            <li className="text-grey-dark text-base leading-loose">
              Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Description;
