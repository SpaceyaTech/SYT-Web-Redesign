import PropTypes from "prop-types";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import cardImg from "../../../assets/images/resources-page/card.jpeg";

function ResourceField({ img, numberOfResources, title }) {
  return (
    <Link
      to="/resources"
      className="border-4 border-white rounded-lg p-2 bg-[#E5EFEC] flex items-center gap-5"
    >
      <LazyLoadImage
        src={img || cardImg}
        alt={title}
        className="aspect-square size-24 rounded-md object-cover"
        effect="opacity"
      />

      <div className="flex flex-col gap-2 text-base">
        <h5 className="text-gray-800 font-medium">{title}</h5>
        <span className="text-gray-600 font-normal">
          {numberOfResources ?? 0} resources
        </span>
      </div>
    </Link>
  );
}

ResourceField.propTypes = {
  img: PropTypes.string,
  numberOfResources: PropTypes.number,
  title: PropTypes.string.isRequired,
};

ResourceField.defaultProps = {
  img: null,
  numberOfResources: 0,
};

export default ResourceField;
