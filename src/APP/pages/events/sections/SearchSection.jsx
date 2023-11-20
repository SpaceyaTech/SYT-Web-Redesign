import React from "react";
import { community } from "../../../../assets/images/community";

function SearchSection() {
  // content-between md:px-20

  return (
    <div
      className="bg-cover bg-no-repeat py-24 text-center"
      style={{ backgroundImage: `url(${community}` }}
    >
      <div className="flex flex-col h-full items-center justify-center content-between md:px-20">
        <div className="text-white">
          <h2 className="mb-10 text-lg md:text-3xl font-medium">
            SpaceYaTech Events
          </h2>
        </div>
        {/* <div className="flex relative px-4 w-full md:w-3/5">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block h-[48px] w-full pl-4 text-sm text-white bg-transparent rounded-full border-l-gray-50 border-l-2 border border-gray-300 focus:ring-white focus:border-white border-2 dark:bg-transparent dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-white placeholder-white font-normal text-base md:text-sm"
              placeholder="Search events"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-transparent rounded-r-lg border border-transparent hover:bg-transparent focus:ring-4 focus:outline-none dark:border-transparent"
            >
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SearchSection;
