import React from "react";

const DeveloperCard = ({ name, title, headshot }) => {
  return (
    <div className="relative h-[216px]">
      {/* headshot */}
      <img
        src={headshot}
        alt={name}
        className="h-[120px] w-[120px] rounded-xl object-cover z-10 absolute top-0 left-1/2 transform -translate-x-1/2 shadow-md md:shadow-transparent"
      />

      {/* Details */}
      <div className="bg-[#EDFCF3] absolute bottom-0 left-0 w-full h-3/5 flex flex-col items-center justify-end text-center gap-1 pb-5 md:pb-4 rounded-md md:rounded-lg shadow-md md:shadow-transparent">
        <h3 className="text-[15px] leading-5 font-medium md:text-xl md:leading-6 capitalize">
          {NamedNodeMap}
        </h3>
        <span className="text-xs font-normal md:text-sm capitalize">
          {title}
        </span>
        <a
          href="/products"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#009975] text-[11px] font-normal underline mt-1/2 md:text-sm"
        >
          View resume
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
