import React from "react"; // , { useState }
import { Link } from "react-router-dom";

function EventsUpdateSection({
  cityFilter,
  topEventsCities,
  updateCityFilter,
  showAllEventsLink,
}) {
  return (
    <div className="flex items-center justify-between my-4 ">
      <div className="flex flex-row items-start md:items-center">
        {topEventsCities && Array.isArray(topEventsCities.cities) ? (
          <>
            <h2 className="text-base md:text-lg md:font-light text-[#323433] whitespace-nowrap">
              Events in
            </h2>
            <div className="flex items-center flex-wrap">
              {topEventsCities.cities.map((city, index) => (
                <button
                  key={index}
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  className="text-blue-700 underline font-medium text-s px-2 md:py-2.5 text-center inline-flex items-center transition duration-150 ease-in-out"
                  type="button"
                  onClick={() => {
                    updateCityFilter(city);
                  }}
                >
                  {city}{" "}
                  {/* <svg className=" h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 ">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg> */}
                </button>
              ))}
            </div>

            {cityFilter.city && (
              <span
                className="text-red-800 underline font-medium text-s px-2 py-2.5 text-center cursor-pointer"
                onClick={() => updateCityFilter("")}
              >
                Clear City
              </span>
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        {showAllEventsLink && (
          <Link to="/allevents">
            <div className="flex items-center mr-6">
              <h2 className="text-sm text-primary text-center font-normal mr-2 hover:underline">
                ALL EVENTS
              </h2>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3172 7.44254L9.69219 13.0675C9.57491 13.1848 9.41585 13.2507 9.25 13.2507C9.08415 13.2507 8.92509 13.1848 8.80781 13.0675C8.69054 12.9503 8.62465 12.7912 8.62465 12.6253C8.62465 12.4595 8.69054 12.3004 8.80781 12.1832L13.3664 7.62535H1.125C0.95924 7.62535 0.800269 7.5595 0.683058 7.44229C0.565848 7.32508 0.5 7.16611 0.5 7.00035C0.5 6.83459 0.565848 6.67562 0.683058 6.55841C0.800269 6.4412 0.95924 6.37535 1.125 6.37535H13.3664L8.80781 1.81753C8.69054 1.70026 8.62465 1.5412 8.62465 1.37535C8.62465 1.2095 8.69054 1.05044 8.80781 0.93316C8.92509 0.815885 9.08415 0.75 9.25 0.75C9.41585 0.75 9.57491 0.815885 9.69219 0.93316L15.3172 6.55816C15.3753 6.61621 15.4214 6.68514 15.4529 6.76101C15.4843 6.83688 15.5005 6.91821 15.5005 7.00035C15.5005 7.08248 15.4843 7.16381 15.4529 7.23969C15.4214 7.31556 15.3753 7.38449 15.3172 7.44254Z"
                  fill="#009975"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>
      <div
        id="dropdownDivider"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 relative"
        data-te-dropdown-ref
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              href="#"
              data-te-dropdown-item-ref
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              data-te-dropdown-item-ref
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              data-te-dropdown-item-ref
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            data-te-dropdown-item-ref
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Separated link
          </a>
        </div>
      </div>
    </div>
  );
}

EventsUpdateSection.defaultProps = {
  showAllEventsLink: false,
};

export default EventsUpdateSection;
