import React, { useState } from "react";
import { arrow, course1 } from "../../../../assets/images/resources-page";

const ResourceCard = () => {
  const [hovered, setHovered] = useState(false);
  console.log("Hovered: ", hovered);
  return (
    <div className="relative">
      <div
        className={`flex flex-col ${
          hovered
            ? "z-10 absolute top-0 transform transition-all md:ease-in md:duration-700 md:scale-110"
            : "z-0"
        }`}
        onClick={() => setHovered((prev) => !prev)}
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
              className={`w-6 h-6 object-contain flex md:hidden transform transition-all ease-in duration-700 ${
                hovered && "rotate-180"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base font-bold text-[#323433C9]">
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

          <span className="text-xs leading-5 font-normal">Coursera</span>

          <a
            href="/products"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto border border-[#12A97E] rounded-lg py-[10px] px-10 text-sm text-[#009975] font-normal"
          >
            Go to site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
