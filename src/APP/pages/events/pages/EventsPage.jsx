import React from "react";

import EventCategory from "../sections/eventsSection/EventCategory";
import EventsSection from "../sections/eventsSection/EventsSection";
import SearchSection from "../sections/SearchSection";

function Events() {
  return (
    <div>
      <SearchSection />
      <EventsSection showTabs />
      <EventCategory />
    </div>
  );
}

export default Events;
