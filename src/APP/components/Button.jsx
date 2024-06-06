import React from "react";
import { Link } from "react-router-dom";


function Button({ link, title }) {
  return (
    <Link to={link} className="border rounded-full bg-white p-1 w-fit">
      <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
        <span className="capitalize text-green-header text-sm font-semibold">
          {title}
        </span>
        <img src={arrowRight} alt="arrow-right" className="size-5" />
      </div>
    </Link>
  );
}

export default Button;
