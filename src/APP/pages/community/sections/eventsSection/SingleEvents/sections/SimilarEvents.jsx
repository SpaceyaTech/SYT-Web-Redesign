import React from "react";
import EventCard from "./EventCard";

function SimilarEvents() {
  return (
    <div className="border border-red-500 mx-auto max-w-1216 w-full flex items-center flex-col md:flex-row gap-4 md:gap-8 justify-between md:px-4 xl:px-0">
      {Array.from({ length: 3 }).map((_, i) => (
        <EventCard key={i} />
      ))}
    </div>
  );
}

export default SimilarEvents;
