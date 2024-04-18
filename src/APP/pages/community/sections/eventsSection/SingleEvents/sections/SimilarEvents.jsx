import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useEventsData } from "../../../../../../../hooks/Queries/eventsSection/useEvents";
import { Loader } from "../../../../../../components";
import EventCard from "./EventCard";

function SimilarEvents({ eventCategory }) {
  const { id } = useParams();
  const {
    data: eventsData,
    isError,
    isPending,
    isSuccess,
    refetch: refetchSimilarEvents,
  } = useEventsData(eventCategory);

  useEffect(() => {
    refetchSimilarEvents();
  }, [refetchSimilarEvents, id]);

  const similarEvents = eventsData?.results.filter(
    (event) => Number(event.id) !== Number(id)
  );

  return (
    <>
      {isError && (
        <p className="mx-auto py-6 max-w-1216 w-full flex-center text-red-400 font-bold text-lg text-center">
          Error fetching similar events!
        </p>
      )}
      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading event...</p>
        </div>
      )}
      {Array.isArray(similarEvents) && similarEvents.length === 0 && (
        <p className="mx-auto py-6 max-w-1216 w-full flex-center font-bold text-lg text-center">
          No Similar Events!
        </p>
      )}
      {isSuccess &&
        Array.isArray(similarEvents) &&
        similarEvents.length > 0 && (
          <div className="mx-auto my-6 max-w-1216 w-full grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8 justify-between px-2 md:px-4 xl:px-0">
            {similarEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
    </>
  );
}

export default SimilarEvents;

SimilarEvents.propTypes = {
  eventCategory: PropTypes.string.isRequired,
};
