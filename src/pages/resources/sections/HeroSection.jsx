import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { earthMoon } from "../../../assets/images/resources-page";

function HeroSection() {
  return (
    <div className="bg-[#E5EFEC] py-9 px-6 border-[0.5px] border-solid border-[#00664E] rounded-2xl relative md:mb-20 lg:mb-24 xl:mb-28 mb-0">
      <div className="flex flex-col gap-2 md:w-2/5 w-full ">
        <h1 className="text-xl text-[#009975] font-normal">Resources</h1>

        <h2 className="md:text-3xl text-xl md:leading-[46px] leading-9 font-medium">
          Discover{" "}
          <span className="text-[#009975]">tech tools and resources</span>
          to boost your productivity
        </h2>
        <p className="md:mb-10 md:text-base text-sm font-normal">
          Master the art of tech with our expert guides, tutorials, and
          step-by-step instructions to help you develop proficiency and
          confidence in the world of technology.
        </p>
      </div>

      <LazyLoadImage
        src={earthMoon}
        alt="earth & moon"
        className="absolute md:right-12 right-8 -top-16 md:-top-32 lg:-top-40 object-contain w-32 md:w-96 lg:w-fit md:z-10"
      />
    </div>
  );
}

export default HeroSection;
