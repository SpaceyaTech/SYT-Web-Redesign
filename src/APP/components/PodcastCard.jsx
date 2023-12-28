import React from "react";
import PropTypes from "prop-types";

function PodcastCard({ img, category = "Podcast", title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[95vw] md:w-[450px] h-[500px] rounded-md overflow-hidden relative">
        <img src={img} alt="podcast" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black opacity-80 h-2/5 md:h-2/5" />

        <div className="absolute bottom-0 inset-x-0 text-white flex flex-col gap-3 px-6 py-4">
          <h5 className="text-[#009975] font-medium text-xs md:text-sm capitalize">
            {category}
          </h5>
          <h3 className="font-semibold text-base md:text-xl">{title}</h3>
          <p className="font-normal text-sm md:text-base">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default PodcastCard;

PodcastCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
