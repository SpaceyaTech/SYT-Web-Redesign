import { parse, format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Events({ events, isVertical }) {
  const verticalContainer =
    "my-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8";
  const horizontalContainer = "flex overflow-auto my-6";

  // Event Card classes
  const verticalWrapper =
    "max-w-sm bg-white border border-gray-200 rounded-lg h-auto";
  const horizontalWrapper = "m-6 bg-white rounded-lg w-72";

  return (
    <div className={isVertical ? verticalContainer : horizontalContainer}>
      {events && Array.isArray(events)
        ? events.map(
            ({ id, name, date, location, mode, poster, city, start_time }) => {
              const buttonColor =
                mode === "Virtual"
                  ? "bg-red-800 hover:bg-red-800"
                  : "bg-blue-800 hover:bg-blue-800";
              return (
                <div
                  key={id}
                  className={isVertical ? verticalWrapper : horizontalWrapper}
                  style={{
                    boxShadow:
                      "0px 4px 10px 0px rgba(4, 8, 13, 0.05), 0px 2px 4px 0px rgba(4, 8, 13, 0.25)",
                  }}
                >
                  <Link to={`/events/${id}`} className="cursor-pointer">
                    <img
                      className="rounded-t-lg w-full h-56 object-contain"
                      src={poster}
                      alt={name}
                    />

                    <div className="p-5 text-[#323433]">
                      <h5 className="mb-2 text-sm font-semibold">{name}</h5>
                      <p className="mb-3 font-medium text-xs whitespace-nowrap">
                        {format(new Date(date), "EEE, MMM d, yyyy")}{" "}
                        {format(
                          parse(start_time, "HH:mm:ss", new Date()),
                          "h:mm a"
                        )}{" "}
                        EAT
                      </p>
                      <p className="mb-3 font-normal text-xs">
                        {location}{" "}
                        {mode.toLowerCase() === "physical" && (
                          <span> • {city}</span>
                        )}
                      </p>
                      <button
                        type="button"
                        className={`text-white ${buttonColor} focus:outline-none focus:ring-4 focus:ring-red-800 font-medium rounded-full text-xs px-3 py-1 text-center mr-2 mb-2`}
                      >
                        {mode}
                      </button>
                    </div>
                  </Link>
                </div>
              );
            }
          )
        : ""}
    </div>
  );
}

export default Events;

Events.defaultProps = {
  isVertical: true,
};

Events.propTypes = {
  events: PropTypes.array.isRequired,
  isVertical: PropTypes.bool.isRequired,
};
