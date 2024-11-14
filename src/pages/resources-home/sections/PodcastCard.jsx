import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { podPoster } from "../../../assets/images/resources-page";

function PodcastCard() {
  return (
    <div className="rounded-lg lg:rounded-xl bg-[#808886FC] p-3 md:p-5 flex items-center gap-4">
      <LazyLoadImage
        src={podPoster}
        alt=""
        className="max-w-[114px] aspect-square rounded-lg"
        effect="opacity"
      />

      <div className="space-y-2 text-white">
        <h5 className="text-base leading-tight font-bold line-clamp-1">
          Ep25: WOMEN TECH SERIES: Role of Mentorship...
        </h5>
        <p className="line-clamp-2 text-sm font-normal">
          In this episode, Merlyin Mayienga hosts the incredible Kipkurui talks
          about product management ...
        </p>

        <ul className="flex items-center gap-2 text-gray-200 text-xs font-medium">
          <li className="text-nowrap">Apr 30</li>
          <li>●</li>
          <li className="text-nowrap">1hr 19min</li>
        </ul>
      </div>
    </div>
  );
}

export default PodcastCard;
