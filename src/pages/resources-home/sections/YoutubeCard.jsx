/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { play } from "../../../assets/images/resources-page";

function YoutubeCard({ channel, length, thumbnail, title, uploaded }) {
  return (
    <div className="flex flex-col">
      {/* ThumbNail */}
      <div className="h-2/3 w-full aspect-video bg-red-300 rounded-md xl:rounded-lg overflow-clip relative cursor-pointer">
        <LazyLoadImage
          src={thumbnail}
          alt={title}
          className="object-cover size-full"
          effect="blur"
        />

        <img
          src={play}
          alt="play"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Description */}
      <div className="h-1/3 w-full p-2 lg:p-4 flex flex-col justify-between">
        <h5 className="uppercase line-clamp-1 text-lg font-semibold">
          {title}
        </h5>

        <div className="flex items-center gap-4">
          <LazyLoadImage
            src={channel.icon}
            alt="logo"
            className="size-10 object-contain"
            effect="blur"
          />

          <h5 className="text-grey-neutral text-base font-semibold">
            {channel.name}
          </h5>
        </div>

        <ul className="flex items-center gap-2 text-gray-400 text-xs font-medium">
          <li className="text-nowrap">{uploaded}</li>
          <li>●</li>
          <li className="text-nowrap">{length}</li>
        </ul>
      </div>
    </div>
  );
}

export default YoutubeCard;
