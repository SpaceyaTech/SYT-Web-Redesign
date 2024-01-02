import React from "react";

import { mission, vision } from "../../../../assets/images/aboutPage";

function MissionVisionSection() {
  return (
    <div className="flex flex-col md:flex-row mx-4 my-8 sm:my-2 md:m-auto px-0 sm:px-14 xl:px-28 min-h-[24rem] md:pb-16 text-center justify-between max-w-screen-2xl">
      <div
        style={{
          background: `url(${mission}) no-repeat center`,
          backgroundSize: "contain",
        }}
        className="md:w-[45%] pt-6 md:pt-20 mb-10 md:mb-0 h-[200px] md:h-auto"
      >
        <h2 className="text-2xl font-semibold title-font my-4">Our Mission</h2>
        <p className="m-auto w-[85%] sm:w-[65%] lg:w-[85%] ">
          To help 10,000 young Africans to transition to tech in the next three
          years by being a pool of resources, mentorship and capacity building.
        </p>
      </div>
      <div
        style={{
          background: `url(${vision}) no-repeat center`,
          backgroundSize: "contain",
        }}
        className="md:w-[45%] pt-2 md:pt-20 h-[200px] md:h-auto"
      >
        <h2 className="text-2xl font-semibold title-font my-4 ">Our Vision</h2>
        <p className="m-auto w-[95%] sm:w-[65%] lg:w-[95%]">
          To be the best tech community, focused on innovation and actually
          leveraging on technology to build solutions for Africa and to help our
          community members to level up their tech skills in the process.
        </p>
      </div>
    </div>
  );
}

export default MissionVisionSection;
