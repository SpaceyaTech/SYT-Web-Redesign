import React from "react";
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
  } = useEventsData(eventCategory);

  const similarEvents = eventsData?.results.filter(
    (event) => Number(event.id) !== Number(id)
  );

  return (
    <>
      {isError && <p>Error fetching similar events!</p>}
      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading event...</p>
        </div>
      )}
      {isSuccess && eventsData.results.length > 0 ? (
        <div className="mx-auto my-6 max-w-1216 w-full grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8 justify-between px-2 md:px-4 xl:px-0">
          {similarEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p>No Similar Events</p>
      )}
    </>
  );
}

export default SimilarEvents;
