import React, { useEffect, useState } from "react";
import { arrow, course1 } from "../../../../assets/images/resources-page";

const ResourceCard = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {}, [hovered]);

  return (
    <div className="relative">
      <div
        className={`flex flex-col transition-all ease-linear duration-[2000ms] ${
          hovered
            ? "md:z-10 md:absolute top-0 md:transform  md:scale-[1.01]"
            : "z-0"
        }`}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => {
          console.log("On mouse Enter");
          setHovered((prev) => !prev);
        }}
        // ref={}
      >
        {/* img cover */}
        <div className="h-[150px]">
          <img src={course1} alt="" className="object-cover h-full w-full" />
        </div>

        {/* desc */}
        <div className="bg-white p-2 flex flex-col gap-[10px] border shadow-md rounded-b-xl">
          <div className="flex justify-between items-center">
            <h5 className="text-base font-normal">Course</h5>
            <img
              src={arrow}
              alt=""
              className={`w-6 h-6 object-contain flex md:hidden transform transition-all transition-out ease-in duration-200 cursor-pointer ${
                hovered && "rotate-180"
              }`}
              onClick={() => setHovered((prev) => !prev)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p
              className="text-base font-bold text-[#323433C9] cursor-pointer"
              onClick={() => setHovered((prev) => !prev)}
            >
              React: Creating and Hosting a Full-stack Site
            </p>

            {/* Show/Hide div */}
            <div className={`${hovered ? "flex" : "hidden"} flex-col gap-2`}>
              <span className="text-base font-normal">Description</span>
              <p className="text-[11px] leading-4 text-[#4C4D4D] font-normal">
                This course covers the basics of React, from beginner to
                advanced and is very appropriate for those people who have just
                finished learning JavaScript and feel ready to start learning
                React. The course is self-paced, lasting for 6 months or earlier
                and is taught by instructors for Google. Would highly recommend
                this course.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs leading-5 font-normal">Coursera</span>
            <span className="text-xs leading-5 font-normal text-primary">
              Beginner
            </span>
          </div>

          <a
            onClick={() => setHovered(false)}
            href="/resources"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-fit  mx-auto border border-[#12A97E] rounded-lg py-[10px] px-10 text-sm text-[#009975] transition-all duration-500 ease-in hover:text-white hover:bg-[#009975] font-normal ${
              hovered ? "flex" : "hidden"
            }`}
          >
            Go to site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
