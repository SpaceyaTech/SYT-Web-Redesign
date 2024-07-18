import PropTypes from "prop-types";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

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

Button.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
