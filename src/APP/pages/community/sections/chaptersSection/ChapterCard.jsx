import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SampleBanner from "../../../../../assets/images/community/Nairobi.png";

function ChapterCard({ id, country, city, name, members, banner }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-80 bg-auto bg-no-repeat bg-center"
      style={{
        // backgroundImage: `url(${banner})`, current url doesn't render an image: http://34.175.73.57:8000/media/default-chapter.png
        backgroundImage: `url(${SampleBanner})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-base font-medium capitalize my-2">
        {name} {city}, {country}
      </h2>
      <p className="text-base text-center leading-6">{members} members</p>
      <Link to={`/chapter/${id}`}>
        <button
          type="button"
          className="py-2 px-12 border-2 border-solid my-8 rounded-lg flex items-center justify-center text-xs capitalize transition-all duration-300 ease-in hover:text-white hover:bg-[#009975]"
        >
          JOIN
        </button>
      </Link>
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
