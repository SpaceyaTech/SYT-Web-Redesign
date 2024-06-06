import React from "react";
import { NavLink } from "react-router-dom";


function GoBackBtn() {
  return (
    <NavLink
      to={-1}
      className="border cursor-pointer rounded-full bg-white p-1 w-fit"
    >
      <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
        <img
          src={arrowRight}
          alt="arrow-right"
          className="size-5 transform rotate-180"
        />
        <span className="capitalize text-green-header text-sm font-semibold">
          Go back
        </span>
      </div>
    </NavLink>
  );
}

export default GoBackBtn;
