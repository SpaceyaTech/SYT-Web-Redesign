import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cardImg from "../../../assets/images/resources-page/card.jpeg";
import logo from "../../../assets/images/sytLogo.png";

function ResourceCard() {
  return (
    <div className="rounded-xl flex flex-col overflow-clip hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <div className="h-1/2 w-full overflow-hidden">
        <LazyLoadImage
          alt="img"
          src={cardImg}
          effect="blur"
          className="size-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="h-1/2 w-full bg-white p-3 md:p-4 xl:p-6 flex flex-col justify-between xl:gap-3">
        <div className="flex items-center gap-2">
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="size-10 object-contain"
            effect="blur"
          />

          <h5 className="text-grey-neutral text-sm">SpaceyaTech</h5>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-green-hero font-medium">
          Harvard CS50
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm font-normal text-grey-dark">
          This is a complete UX design course offered on Coursera. This course
          is best for beginners
        </p>

        {/* Tags */}
        <ul className="flex items-center gap-2 xl:gap-4 text-gray-400 text-xs font-medium">
          <li className="text-nowrap">Course</li>
          <li>●</li>
          <li className="text-nowrap">Product Design</li>
          <li>●</li>
          <li className="text-nowrap">Beginner</li>
        </ul>
      </div>
    </div>
  );
}

export default ResourceCard;
