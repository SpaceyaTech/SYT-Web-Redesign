import { Award, Hourglass, List } from "lucide-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { resourceHero } from "../../../assets/images/resources-page";

function Hero() {
  return (
    <section className="flex flex-col gap-4 md:gap-8">
      {/* Hero Image */}
      <LazyLoadImage
        src={resourceHero}
        alt="hero-image"
        effect="blur"
        loading="lazy"
        className="w-full max-h-96 object-cover"
      />

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        UI Design Fundamentals for Frontend Engineers
      </h2>

      {/* Tags */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 bg-white border border-[#EAECF0] rounded-lg lg:justify-between px-2.5 lg:px-6 py-2.5 w-full">
        <div className="flex flex-col gap-1 border-b lg:border-none py-2 w-full lg:w-1/3">
          <div className="flex items-center gap-1">
            <List size={18} />
            <h5 className="text-base font-medium">12 topics</h5>
          </div>
          <p className="text-[#475467] text-xs leading-5 font-normal lg:line-clamp-1">
            Covering UX design principles and UI design best practices
          </p>
        </div>

        <div className="flex flex-col gap-1 border-b lg:border-none py-2 w-full lg:w-1/3">
          <div className="flex items-center gap-1">
            <Award size={18} />
            <h5 className="text-base font-medium">
              Beginner to intermediate level
            </h5>
          </div>
          <p className="text-[#475467] text-xs leading-5 font-normal lg:line-clamp-1">
            Recommended for beginners
          </p>
        </div>

        <div className="flex flex-col gap-1 border-b lg:border-none py-2 w-full lg:w-1/3">
          <div className="flex items-center gap-1">
            <Hourglass size={18} />
            <h5 className="text-base font-medium">14 hours</h5>
          </div>
          <p className="text-[#475467] text-xs leading-5 font-normal lg:line-clamp-1">
            Minimum study time
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
