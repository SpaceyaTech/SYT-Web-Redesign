import React from "react";

import CategoryCard from "./CategoryCard";
import { categoriesData } from "./data";

function WhatWeOffer() {
  const [selected, setSelected] = React.useState(1);
  return (
    <div className="py-16 flex items-center flex-col gap-10 lg:gap-20 max-w-1440 mx-auto md:px-8 px-5">
      <div className="flex items-center justify-between gap-5 w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="max-w-fit text-primary text-xs leading-loose px-3 bg-gradient-to-r from-[#D7F4EB] to-white py-1 rounded-full font-semibold border-2 border-gray-300 uppercase">
            what we offer
          </h4>

          <h1 className="text-2xl md:text-4xl md:leading-snug text-green-dark font-semibold">
            A broad spectrum of categories are offered
          </h1>

          <ul className="flex flex-col list-none w-full">
            {categoriesData.map(({ category, id }) => (
              <li
                key={id}
                className={`text-base p-4 w-full rounded-lg font-semibold ${selected === id ? "bg-green-header text-white" : ""}`}
              >
                <button
                  className="flex items-center gap-2"
                  type="button"
                  onClick={() => setSelected(id)}
                >
                  <span
                    className={`p-2 border-4 text-black ${selected === id ? "border-green-light bg-white" : "border-white bg-green-light"} size-8 flex-center rounded-full text-sm`}
                  >
                    {id}
                  </span>{" "}
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          {selected === 1 && <CategoryCard categoryData={categoriesData[0]} />}
          {selected === 2 && <CategoryCard categoryData={categoriesData[1]} />}
          {selected === 3 && <CategoryCard categoryData={categoriesData[2]} />}
          {selected === 4 && <CategoryCard categoryData={categoriesData[3]} />}
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
