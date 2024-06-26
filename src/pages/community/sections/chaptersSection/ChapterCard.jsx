import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ChapterCard({ id, country, city, name, members, banner }) {
  return (
    <div className="relative h-80 border-2 rounded-lg border-white overflow-hidden">
      <LazyLoadImage 
        src={banner}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black opacity-60 h-full" />

      <div className="absolute bottom-14 inset-x-0 text-white flex flex-col items-center">
        <h2 className="text-base font-medium capitalize my-2">
          {name} {city}, {country}
        </h2>
        <p className="text-base text-center  leading-6">{members} members</p>
        <Link to={`/chapter/${id}`}>
          <button
            type="button"
            className="py-2 px-12 border-2 border-solid my-8 rounded-lg flex items-center justify-center text-xs capitalize transition-all duration-300 ease-in hover:text-white hover:bg-primary"
          >
            JOIN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChapterCard;

ChapterCard.propTypes = {
  id: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  banner: PropTypes.string.isRequired,
};
