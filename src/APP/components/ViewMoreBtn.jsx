import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

function ViewMoreBtn({ link }) {
  return (
    <Link to={link} className="border rounded-full bg-white p-1 w-fit">
      <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
        <span className="capitalize text-green-header text-sm font-semibold">
          Learn more
        </span>
        <FaArrowRight
          className="text-green-header"
          style={{ fontSize: "20px" }}
        />
      </div>
    </Link>
  );
}

export default ViewMoreBtn;
