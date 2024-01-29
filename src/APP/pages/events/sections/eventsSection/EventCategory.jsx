import React, { useEffect, useState } from "react";
import Events from "./Events";
// import { format, endOfWeek, add, sub } from "date-fns";
import filterRecentTime from "./helpers/FilterRecentTime";
import {
  useEventsCategories,
  useAllEvents,
  useAllCities,
} from "../../../../../hooks/Queries/eventsSection/useEventCategories.jsx";

function EventCategory() {
  const [filters, setFilters] = useState(null);
  const [selectedRecentButton, setSelectedRecentButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // DATA Fetchers
  const { data: eventsCategories, status: statusEventsCategories } =
    useEventsCategories();

  const { data: eventsCities, status: statusEventsCities } = useAllCities();
  const {
    data: events,
    status: statusEvents,
    refetch: refetchEvents,
  } = useAllEvents(filters);

  // Monitor filters
  useEffect(() => {
    refetchEvents();
  }, [filters]);

  // Handle filter by events categories
  const filterEventsCategory = (category) => {
    if (filters && filters.category == category) {
      return;
    }

    setFilters((prevState) => {
      return { ...prevState, category: category };
    });
    setSelectedCategory((prevState) => {
      return (prevState = category);
    });
  };

  // Handle filter by recent buttons
  const filterRecents = (times) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        start_date: filterRecentTime(times),
      };
    });
    setSelectedRecentButton((prevState) => {
      return (prevState = times);
    });
  };

  const filterCities = (city) => {
    setFilters((prevState) => {
      return { ...prevState, city: city };
    });
    setSelectedCity((prevState) => {
      return (prevState = city);
    });
  };

  // Clear selected filters
  const clearEvents = (payload) => {
    switch (payload) {
      case "recents":
        setFilters((prevState) => {
          const { date, ...rest } = prevState;
          return rest;
        });
        setSelectedRecentButton((prevState) => {
          return (prevState = null);
        });
        break;

      case "categories":
        setFilters((prevState) => {
          const { category, ...rest } = prevState;
          return rest;
        });
        setSelectedCategory((prevState) => {
          return (prevState = null);
        });
        break;

      case "city":
        setFilters((prevState) => {
          const { city, ...rest } = prevState;
          return rest;
        });
        setSelectedCity((prevState) => {
          return (prevState = null);
        });
        break;

      default:
        setFilters((prevState) => {
          return (prevState = null);
        });
        setSelectedRecentButton((prevState) => {
          return (prevState = null);
        });
        setSelectedCategory((prevState) => {
          return (prevState = null);
        });
        setSelectedCity((prevState) => {
          return (prevState = null);
        });
        break;
    }
  };

  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-wrap flex-col">
        <h2 className="text-lg font-light text-[#323433] ">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6">
          {statusEventsCategories === "error" && (
            <p>Error loading events categories!</p>
          )}
          {statusEventsCategories === "loading" && (
            <p>Loading Events Categories...</p>
          )}
          {statusEventsCategories === "success" &&
          eventsCategories &&
          Array.isArray(eventsCategories)
            ? eventsCategories.map(({ id, name }) => (
                <button
                  className={`hover:bg-blue-500 active:bg-blue-500 font-normal hover:text-white py-2 px-4 border border-[#323433] hover:border-transparent rounded w-full truncate ${
                    filters !== null && filters.category == name
                      ? " bg-blue-500 text-white"
                      : " text-[#323433]"
                  }`}
                  key={id}
                  onClick={() => filterEventsCategory(name)}
                >
                  {name}
                </button>
              ))
            : ""}

          {selectedCategory && (
            <a
              onClick={() => clearEvents("categories")}
              className="hover:text-red-800 hover:underline cursor-pointer align-baseline"
            >
              Clear Categories
            </a>
          )}
        </div>

        <div className="flex flex-row items-center">
          {statusEventsCities === "error" && <p>Error loading cities!</p>}
          {statusEventsCities === "loading" && <p>Loading cities...</p>}
          {statusEventsCities === "success" && (
            <>
              <h2 className="text-base md:text-lg md:font-light text-[#323433] whitespace-nowrap">
                Events in
              </h2>
              {eventsCities && Array.isArray(eventsCities)
                ? eventsCities.cities.map((city, index) => (
                    <button
                      key={index}
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-blue-700 underline font-medium text-s px-2 py-2.5 text-center inline-flex items-center transition duration-150 ease-in-out"
                      type="button"
                      onClick={() => filterCities(city)}
                    >
                      {city}{" "}
                      {/* <svg className=" h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 ">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg> */}
                    </button>
                  ))
                : ""}
              {selectedCity && (
                <span
                  className="text-red-800 underline font-medium text-s px-2 py-2.5 text-center cursor-pointer"
                  onClick={() => clearEvents("city")}
                >
                  Clear City
                </span>
              )}
            </>
          )}
        </div>
        <br />
        <div className="pb-6 flex overflow-auto">
          <button
            className={`${
              selectedRecentButton !== null && selectedRecentButton == "today"
                ? "bg-primary text-white"
                : "bg-[#F7F7F7] text-[#4C4D4D]"
            } hover:bg-primary hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium rounded-full whitespace-nowrap`}
            onClick={() => filterRecents("today")}
          >
            Today
          </button>
          <button
            className={`${
              selectedRecentButton !== null &&
              selectedRecentButton == "thisweek"
                ? "bg-primary text-white"
                : "bg-[#F7F7F7] text-[#4C4D4D]"
            } hover:bg-primary hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium rounded-full ml-4 whitespace-nowrap`}
            onClick={() => filterRecents("thisweek")}
          >
            This week
          </button>
          <button
            className={`${
              selectedRecentButton !== null && selectedRecentButton == "weekend"
                ? "bg-primary text-white"
                : "bg-[#F7F7F7] text-[#4C4D4D]"
            } hover:bg-primary hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium file:px-4 rounded-full ml-4 whitespace-nowrap`}
            onClick={() => filterRecents("weekend")}
          >
            This weekend
          </button>
          <button
            className={`${
              selectedRecentButton !== null && selectedRecentButton == "recent"
                ? "bg-primary text-white"
                : "bg-[#F7F7F7] text-[#4C4D4D]"
            } hover:bg-primary hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium rounded-full ml-4 whitespace-nowrap`}
            onClick={() => filterRecents("recent")}
          >
            Recent
          </button>

          {selectedRecentButton && (
            <button
              className={`bg-[#c4c2c2] text-white hover:bg-red-800 hover:text-white text-sm px-5 text-center inline-flex items-center h-8 font-medium py-2 rounded-full ml-4 whitespace-nowrap`}
              onClick={() => clearEvents("recents")}
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-lg font-light text-[#323433] ">Events</h2>
          </div>
          <div className="flex flex-row">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 9.375V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V9.375C9.375 9.20924 9.44085 9.05027 9.55806 8.93306C9.67527 8.81585 9.83424 8.75 10 8.75C10.1658 8.75 10.3247 8.81585 10.4419 8.93306C10.5592 9.05027 10.625 9.20924 10.625 9.375ZM15.625 15C15.4592 15 15.3003 15.0658 15.1831 15.1831C15.0658 15.3003 15 15.4592 15 15.625V16.875C15 17.0408 15.0658 17.1997 15.1831 17.3169C15.3003 17.4342 15.4592 17.5 15.625 17.5C15.7908 17.5 15.9497 17.4342 16.0669 17.3169C16.1842 17.1997 16.25 17.0408 16.25 16.875V15.625C16.25 15.4592 16.1842 15.3003 16.0669 15.1831C15.9497 15.0658 15.7908 15 15.625 15ZM17.5 12.5H16.25V3.125C16.25 2.95924 16.1842 2.80027 16.0669 2.68306C15.9497 2.56585 15.7908 2.5 15.625 2.5C15.4592 2.5 15.3003 2.56585 15.1831 2.68306C15.0658 2.80027 15 2.95924 15 3.125V12.5H13.75C13.5842 12.5 13.4253 12.5658 13.3081 12.6831C13.1908 12.8003 13.125 12.9592 13.125 13.125C13.125 13.2908 13.1908 13.4497 13.3081 13.5669C13.4253 13.6842 13.5842 13.75 13.75 13.75H17.5C17.6658 13.75 17.8247 13.6842 17.9419 13.5669C18.0592 13.4497 18.125 13.2908 18.125 13.125C18.125 12.9592 18.0592 12.8003 17.9419 12.6831C17.8247 12.5658 17.6658 12.5 17.5 12.5ZM4.375 12.5C4.20924 12.5 4.05027 12.5658 3.93306 12.6831C3.81585 12.8003 3.75 12.9592 3.75 13.125V16.875C3.75 17.0408 3.81585 17.1997 3.93306 17.3169C4.05027 17.4342 4.20924 17.5 4.375 17.5C4.54076 17.5 4.69973 17.4342 4.81694 17.3169C4.93415 17.1997 5 17.0408 5 16.875V13.125C5 12.9592 4.93415 12.8003 4.81694 12.6831C4.69973 12.5658 4.54076 12.5 4.375 12.5ZM6.25 10H5V3.125C5 2.95924 4.93415 2.80027 4.81694 2.68306C4.69973 2.56585 4.54076 2.5 4.375 2.5C4.20924 2.5 4.05027 2.56585 3.93306 2.68306C3.81585 2.80027 3.75 2.95924 3.75 3.125V10H2.5C2.33424 10 2.17527 10.0658 2.05806 10.1831C1.94085 10.3003 1.875 10.4592 1.875 10.625C1.875 10.7908 1.94085 10.9497 2.05806 11.0669C2.17527 11.1842 2.33424 11.25 2.5 11.25H6.25C6.41576 11.25 6.57473 11.1842 6.69194 11.0669C6.80915 10.9497 6.875 10.7908 6.875 10.625C6.875 10.4592 6.80915 10.3003 6.69194 10.1831C6.57473 10.0658 6.41576 10 6.25 10ZM11.875 6.25H10.625V3.125C10.625 2.95924 10.5592 2.80027 10.4419 2.68306C10.3247 2.56585 10.1658 2.5 10 2.5C9.83424 2.5 9.67527 2.56585 9.55806 2.68306C9.44085 2.80027 9.375 2.95924 9.375 3.125V6.25H8.125C7.95924 6.25 7.80027 6.31585 7.68306 6.43306C7.56585 6.55027 7.5 6.70924 7.5 6.875C7.5 7.04076 7.56585 7.19973 7.68306 7.31694C7.80027 7.43415 7.95924 7.5 8.125 7.5H11.875C12.0408 7.5 12.1997 7.43415 12.3169 7.31694C12.4342 7.19973 12.5 7.04076 12.5 6.875C12.5 6.70924 12.4342 6.55027 12.3169 6.43306C12.1997 6.31585 12.0408 6.25 11.875 6.25Z"
                fill="#009975"
              />
            </svg>
            <p className="text-sm font-normal text-primary ml-2">
              {" "}
              FILTER EVENTS
            </p>
          </div>
        </div>
      </div>
      {statusEvents === "error" && <p>Error loading events!</p>}
      {statusEvents === "loading" && <p>Loading events...</p>}
      {statusEvents === "success" && (
        <>
          {events?.count === 0 ? (
            <p>No events found!</p>
          ) : (
            <>
              <Events events={events.results} />
              {events.next && (
                <button className="bg-transparent self-center active:bg-green-600 active:text-white font-normal w-fit text-primary py-2 px-4 md:px-28 border-2 border-[#009975] rounded my-12">
                  SEE MORE
                </button>
              )}
            </>
          )}
        </>
      )}
      &nbsp;
    </div>
  );
}

export default EventCategory;
