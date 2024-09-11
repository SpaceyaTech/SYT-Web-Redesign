import React from "react";

import InstructorsComponent from "./InstructorsComponent";
import NextCohortSlot from "./NextCohortSlot";
import { CurriculumAccordion } from "@/components";
import { LeadershipData } from "@/pages/aboutUs/data";

function Description() {
  const defaultFocusedLinkRef = React.useRef(null);
  const [subscription, setSubscription] = React.useState("now");

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
    <div className="w-full flex gap-6 md:gap-12">
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

        {/* Instructors */}
        <div className="space-y-2" id="Instructors">
          <h3 className="text-green-header text-xl font-semibold">
            Instructors
          </h3>

          <p className="text-base text-grey-dark leading-8">
            Each cohort is taught by a team of UI/UX professionals who are
            thriving in the industry as professional product designers. The
            teachers will be supported by mentors who are equally professionals
            in product design.
          </p>

          <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll scrollbar-2 w-full md:w-auto pb-6">
            {LeadershipData.map(({ name, title, image, linkedin, twitter }) => (
              <InstructorsComponent
                key={name}
                name={name}
                title={title}
                image={image}
                linkedin={linkedin}
                twitter={twitter}
              />
            ))}
          </div>
        </div>

        <hr />

        {/* Pricing */}
        <div className="space-y-2" id="Pricing">
          <h3 className="text-green-header text-xl font-semibold">Pricing</h3>

          <p className="text-base text-grey-dark leading-8">
            You can’t put a price on a skill that will multiply your
            productivity 5X. We charge a motivational fee for our instructors
            and mentors to keep showing up besides passion.
          </p>

          <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-6 border space-y-5 w-full md:w-96">
            <div className="flex items-center border-[0.5px] border-green-header max-w-fit rounded-lg overflow-hidden text-xs leading-8">
              <button
                type="button"
                onClick={() => setSubscription("now")}
                className={`px-3.5 py-1 ${subscription === "now" ? "bg-grey-mild" : "bg-transparent"} flex items-center gap-2`}
              >
                <p className="">Pay today</p>

                {subscription === "now" && (
                  <span className="bg-[#D7E9E4] px-2 rounded text-green-800">
                    Save
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSubscription("monthly")}
                className={`border-l border-l-green-header px-3.5 py-1 ${subscription === "monthly" ? "bg-grey-mild" : "bg-transparent"} flex items-center gap-2`}
              >
                <p>Pay monthly</p>

                {/* {subscription === "monthly" && (
                  <span className="bg-[#D7E9E4] px-2 rounded text-green-800">
                    Save
                  </span>
                )} */}
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm">Pay at once. Save Ksh 2000</p>

              <h5 className="flex items-center gap-4 text-green-dark text-lg">
                <span className="line-through ">KSH 8000</span>
                <b className="font-semibold">KSH 6000</b>
              </h5>
            </div>

            <button
              type="button"
              className="w-full text-white bg-green-dark rounded px-6 py-2 text-sm font-semibold transition-all border border-green-dark ease-in duration-500 hover:bg-transparent hover:text-green-dark"
            >
              Enroll
            </button>

            <ul className="list-image-checkmark list-inside space-y-2 text-sm">
              <li className="text-grey-dark leading-loose">
                2 weekly live classes
              </li>
              <li className="text-grey-dark leading-loose">
                Learn industry tools
              </li>
              <li className="text-grey-dark leading-loose">
                Graduate with 2 projects
              </li>
              <li className="text-grey-dark leading-loose">
                1:1 support from mentors
              </li>
              <li className="text-grey-dark leading-loose">
                Job-ready portfolio
              </li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Next Cohort */}
        <div className="space-y-2" id="NextCohort">
          <h3 className="text-green-header text-xl font-semibold">
            Next Cohort
          </h3>

          <p className="text-base text-grey-dark leading-8">
            Our Product Design Masterclasses tend to fill up pretty quickly
            which is why we open them months in advance. Live Classes are 90
            minutes on Thursday and Saturday from 9:00 pm - 10:00pm.
          </p>

          <div className="flex flex-col gap-2">
            <NextCohortSlot slots={16} />
            <NextCohortSlot slots={5} />
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Description;
