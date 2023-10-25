import React from "react";
import { Link } from "react-router-dom";

function ChapterCard({ id, country, city, name, members, banner }) {
  // border-2  rounded-2xl
  return (
    <div
      className="flex flex-col items-center justify-center h-80 bg-auto bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${banner}`,
        "background-size": "cover",
      }}
    >
      <h2 className="text-base font-medium capitalize my-2">
        {name} {city}, {country}
      </h2>
      <p className="text-base text-center leading-6">{members} members</p>
      <Link to={`/chapter/${id}`}>
        <button className="py-2 px-12 border-2 border-solid my-8 rounded-lg flex items-center justify-center text-xs capitalize transition-all duration-300 ease-in hover:text-white hover:bg-[#009975]">
          EXPLORE
        </button>
      </Link>
    </div>
  );
}

export default ChapterCard;
