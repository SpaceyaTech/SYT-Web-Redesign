/* eslint-disable react/prop-types */
import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import CurriculumAccordion from "./CurriculumAccordion";
import InstructorsComponent from "./InstructorsComponent";
import NextCohortSlot from "./NextCohortSlot";

function Description({
  category,
  mentors,
  milestones,
  pricing,
  programDescription,
  programOutcomes,
  whatYouWillLearn,
  whoCanApply,
}) {
  const defaultFocusedLinkRef = React.useRef(null);
  const [subscription, setSubscription] = React.useState("now");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const words = pathname.split("/");
  const topic = words[words.length - 1];

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

  const programPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: pricing.currency,
  }).format(pricing.fullAmount);
  const discountedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: pricing.currency,
  }).format(Number(pricing.fullAmount - pricing.discountedAmount));

  return (
    <div className="w-full flex gap-6 md:gap-12">
      <aside className="bg-white p-1 rounded-xl w-1/5 h-fit hidden lg:block">
        <div className="w-full border rounded-lg bg-green-light p-4 space-y-4 text-base pb-6">
          <h4 className="uppercase font-semibold text-nowrap">{category}</h4>

          {/* sections */}
          <section className="flex flex-col gap-3 text-[#767975] font-normal items-start">
            <button
              type="button"
              onClick={() => handleScrollToSection("ProgramDescription")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
              ref={defaultFocusedLinkRef}
            >
              Program Description
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("WhoCanApply")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              Who can apply
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("WhatYouWillLearn")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              What you will learn
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("Milestones")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              Milestones
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("ProgramOutcome")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              Program Outcome
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("Mentors")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              Mentors
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("Pricing")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              Pricing
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("NextCohort")}
              className="focus:text-green-dark focus:font-medium outline-none text-left"
            >
              Next Cohort
            </button>
          </section>

          <button
            type="button"
            onClick={() => navigate(`/mastercraft/${topic}/enroll`)}
            className="w-full text-white bg-green-dark rounded px-6 py-2 text-sm font-semibold transition-all border border-green-dark ease-in duration-500 hover:bg-transparent hover:text-green-dark"
          >
            Enroll
          </button>
        </div>
      </aside>

      <aside className="w-full md:w-4/5 space-y-4 md:space-y-8">
        {/* Program Description */}
        <div className="space-y-2" id="ProgramDescription">
          <h3 className="text-green-header text-xl font-semibold">
            Program Description
          </h3>
          <p className="text-grey-dark text-sm md:text-base leading-loose md:leading-8">
            {programDescription}
          </p>
        </div>

        <hr />

        {/* Who can apply */}
        <div className="space-y-2" id="WhoCanApply">
          <h3 className="text-green-header text-xl font-semibold">
            Who can apply
          </h3>
          <ul className="list-image-checkmark list-inside space-y-2 text-sm md:text-base leading-loose md:leading-8">
            {whoCanApply.map((item) => (
              <li key={item} className="text-grey-dark">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <hr />

        {/* What you'll learn */}
        <div className="space-y-2" id="WhatYouWillLearn">
          <h3 className="text-green-header text-xl font-semibold">
            What you will learn
          </h3>
          <ul className="list-image-checkmark space-y-2 text-sm md:text-base leading-loose md:leading-8">
            {whatYouWillLearn.map(({ content, subTitle }) => (
              <li key={subTitle} className="text-grey-dark ml-6">
                <p>
                  {subTitle && <b>{subTitle} </b>}

                  {content}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <hr />

        {/* Milestones */}
        <div className="flex flex-col gap-3" id="Milestones">
          <h3 className="text-green-header text-xl font-semibold">
            Program milestones
          </h3>

          <CurriculumAccordion milestones={milestones} />
        </div>

        <hr />

        {/* Program Outcome */}
        <div className="space-y-2" id="ProgramOutcome">
          <h3 className="text-green-header text-xl font-semibold">
            Program Outcomes
          </h3>

          <ul className="list-image-checkmark space-y-2 text-sm md:text-base leading-loose md:leading-8">
            {programOutcomes.map(({ content, subTitle }) => (
              <li className="text-grey-dark ml-6" key={subTitle}>
                <p>
                  {subTitle && <b>{subTitle} </b>}

                  {content}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <hr />

        {/* Mentors */}
        <div className="space-y-2" id="Mentors">
          <h3 className="text-green-header text-xl font-semibold">Mentors</h3>

          <p className="text-sm md:text-base text-grey-dark md:leading-8">
            We have carefully selected mentors, with whom you will meet for 1:1
            sessions and group sessions, to unblock you and guide you on best
            practices.
          </p>

          <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll scrollbar-2 w-full md:w-auto py-6">
            {mentors.map(
              ({
                id,
                name,
                role,
                organisation,
                img,
                experience,
                linkedin,
                twitter,
              }) => (
                <InstructorsComponent
                  key={id}
                  name={name}
                  title={role}
                  image={img}
                  linkedin={linkedin}
                  twitter={twitter}
                  organisation={organisation}
                  experience={experience}
                />
              )
            )}
          </div>
        </div>

        <hr />

        {/* Pricing */}
        <div className="space-y-2" id="Pricing">
          <h3 className="text-green-header text-xl font-semibold">Pricing</h3>

          <p className="text-sm md:text-base text-grey-dark md:leading-8">
            You can’t put a price on a skill that will multiply your
            productivity 5X. We charge a motivational fee for our instructors
            and mentors to keep showing up besides passion.
          </p>

          <div className="rounded-lg md:rounded-2xl p-4 md:p-6 border-2 border-white bg-green-light space-y-5 w-full md:w-96">
            <div className="flex items-center border-[0.5px] border-[#92CABD] max-w-fit rounded-lg overflow-hidden text-xs md:leading-8 text-nowrap">
              <button
                type="button"
                onClick={() => setSubscription("now")}
                className={`px-3.5 py-1 ${subscription === "now" ? "bg-[#D8F3E4]" : "bg-white"} flex items-center gap-2`}
              >
                <p className="">Pay whole</p>

                {subscription === "now" && (
                  <span className="bg-[#BF8301] p-1.5 rounded-full text-white text-xs">
                    Save
                  </span>
                )}
              </button>

              <button
                type="button"
                disabled
                onClick={() => setSubscription("monthly")}
                className={`border-l border-l-[#92CABD] px-3.5 py-1 ${subscription === "monthly" ? "bg-grey-mild" : "bg-white"} flex disabled:cursor-not-allowed items-center gap-2`}
              >
                <p>Pay in installments</p>

                {/* {subscription === "monthly" && (
                  <span className="bg-[#D7E9E4] px-2 rounded text-green-800">
                    Save
                  </span>
                )} */}
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm">Pay before {pricing.offerDeadline}</p>

              <h5 className="flex items-center gap-4 text-green-dark text-lg">
                <span className="line-through text-red-500">
                  {programPrice}
                </span>
                <b className="font-semibold">{discountedPrice}</b>
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
                Team-based collaboration
              </li>
              <li className="text-grey-dark leading-loose">
                Learn industry tools
              </li>
              <li className="text-grey-dark leading-loose">
                Graduate with 2 real world project
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

          <p className="text-sm md:text-base text-grey-dark md:leading-8">
            Our Mastercraft program openings tend to fill up pretty quickly
            which is why we open them months in advance. Live Classes are 90
            minutes on Thursday and Saturday from 9:00 pm - 10:00pm.
          </p>

          <div className="flex flex-col gap-2">
            <NextCohortSlot slots={16} />
            <NextCohortSlot slots={5} />
          </div>
        </div>

        <hr />
      </aside>
    </div>
  );
}

export default Description;
