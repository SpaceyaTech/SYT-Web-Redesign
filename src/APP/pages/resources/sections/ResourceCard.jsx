import React from "react";
import { Link } from "react-router-dom";
import { tools } from "../../../../assets/images/resources-page";

import { arrowRight } from "../../../../assets/images/resources-page";

const ResourceCard = ({ resource }) => {
  const { id, name, description } = resource;
  return (
    <div className="flex flex-col items-center p-6 gap-3 border border-[#CBCDCC] rounded-2xl bg-white">
      <div className="p-4  rounded-full bg-[#F5FFFD]">
        <img src={tools} alt={name} className="w-12 h-12" />
      </div>

      <h4 className="text-center text-lg font-medium capitalize">{name}</h4>

      <p className="text-base font-normal text-center">{description}</p>

      <Link
        to="/"
        className="flex items-center gap-2 text-xs leading-5  py-1 px-2 border transition-all duration-300 ease-in border-white hover:border-[#009975] rounded-lg"
      >
        {/* <button className="flex items-center gap-2 text-xs leading-5"> */}
        <span className="text-[#009975] uppercase">explore</span>
        <img src={arrowRight} alt="arrow-right" />
        {/* </button> */}
      </Link>
    </div>
  );
};

export default ResourceCard;
