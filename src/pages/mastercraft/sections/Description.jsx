import React from "react";
import { Link } from "react-router-dom";

function Description() {
  const defaultFocusedLinkRef = React.useRef(null);

  React.useEffect(() => {
    if (defaultFocusedLinkRef.current) {
      defaultFocusedLinkRef.current.focus();
    }
  }, []);
  return (
    <div className="border border-red-500 w-full flex gap-6 md:gap-12">
      <div className="w-1/5 hidden md:block border rounded-xl bg-white p-4 space-y-4 text-base">
        <h4 className="uppercase font-semibold">Product Design</h4>

        <div className="flex flex-col gap-3 text-[#767975] font-normal">
          <Link
            to="#CourseDescription"
            className="focus:text-green-dark focus:font-medium outline-none"
            ref={defaultFocusedLinkRef}
          >
            Course Description
          </Link>
          <Link
            to="#WhoCanApply"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Who can apply
          </Link>
          <Link
            to="#WhatYouWillLearn"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            What you will learn
          </Link>
          <Link
            to="#Curriculum"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Curriculum
          </Link>
          <Link
            to="#CourseOutcome"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Course Outcome
          </Link>
          <Link
            to="#Instructors"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Instructors
          </Link>
          <Link
            to="#Pricing"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Pricing
          </Link>
          <Link
            to="#NextCohort"
            className="focus:text-green-dark focus:font-medium outline-none"
          >
            Next Cohort
          </Link>
        </div>

        <button
          type="button"
          className="w-full text-white bg-green-dark rounded px-6 py-2 text-sm font-semibold transition-all border border-green-dark ease-in duration-500 hover:bg-transparent hover:text-green-dark"
        >
          Enroll
        </button>
      </div>

      <div className="w-full md:w-4/5 bg-blue-300">Right</div>
    </div>
  );
}

export default Description;
