import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

function Button({ link, title }) {
  return (
    <Link
      to={link}
      role="button"
      aria-label={title}
      className="border rounded-full bg-white p-1 w-fit"
    >
      <div className="flex-center bg-green-light rounded-full px-3 py-1.5 gap-2">
        <span className="capitalize text-green-header text-sm font-semibold">
          {title}
        </span>
        <FiArrowRightCircle className="text-green-header size-5" />
      </div>
    </Link>
  );
}

export default Button;
