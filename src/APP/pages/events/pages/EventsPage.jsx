import React from "react";
import SearchSection from "../sections/SearchSection";
import EventsSection from "../sections/eventsSection/EventsSection";
import EventCategory from "../sections/eventsSection/EventCategory";

function Events() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <SearchSection />
      <EventsSection showTabs />
      <EventCategory />
    </main>
  );
}

export default Events;
