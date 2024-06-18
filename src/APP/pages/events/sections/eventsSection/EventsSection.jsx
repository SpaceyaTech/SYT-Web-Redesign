import React, { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { PiArrowCircleLeft, PiArrowCircleRight } from "react-icons/pi";
import { useAllCities } from "../../../../../hooks/Queries/eventsSection/useEventCategories";
import useTopEvents from "../../../../../hooks/Queries/eventsSection/useTopEvents";
import { Loader } from "../../../../components";
import Error500 from "../../../errorPages/Error500";
import Events from "./Events";

function EventsSection({ showTabs, showAllEventsLink }) {
  const [filters, setFilters] = useState({});

  const {
    data: topEventsData,
    isPending: isLoadingTopEvents,
    isError: isErrorTopEvents,
    isSuccess: isSuccessTopEvents,
    refetch: refetchTopEvents,
  } = useTopEvents(filters);

  const {
    data: topEventsCities,
    isPending,
    isError,
    isSuccess,
  } = useAllCities();

  // To update the filters from the EventsUpdateSection sub-component
  const updateCityFilter = (city) => {
    setFilters((prevState) => ({ ...prevState, city }));
  };

  // To update the recent filters from the EventsTab sub-component
  const updateRecentFilter = (dateFilterString) => {
    setFilters((prevState) => ({
      ...prevState,
      start_date: dateFilterString,
    }));
  };

  useEffect(() => {
    refetchTopEvents();
  }, [filters]);

  return (
    <section className="py-2 md:py-6 size-full ">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4 my-8">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          Our Events
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>

      <h3 className="md:text-3xl text-2xl font-semibold title-font text-green-dark text-center">
        Notable events within the <br />
        SpaceYaTech ecosphere
      </h3>
      {isError && <Error500 />}
      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading events...</p>
        </div>
      )}
      {isSuccess &&
        (topEventsData?.count === 0 ? (
          <p>Watch out for new events coming soon!</p>
        ) : (
          <Events events={topEventsData?.results.slice(0, 6)} />
        ))}
      <div>
        <Link
          to="/events"
          className="flex items-center border rounded-full bg-white p-1 w-fit mx-auto"
        >
          <div className="flex items-center bg-green-light rounded-full px-3 py-1.5 gap-2">
            <span className="capitalize text-green-header text-sm font-semibold">
              View more
            </span>
            <PiArrowCircleRight className="size-6 text-green-header" />
          </div>
        </Link>
      </div>
    </section>
  );
}

EventsSection.defaultProps = {
  showTabs: false,
  showAllEventsLink: false,
};

export default EventsSection;
