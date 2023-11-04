import React from 'react';
import SearchSection from '../sections/SearchSection';
import EventsSection from '../sections/eventsSection/EventsSection';
import EventCategory from '../sections/eventsSection/EventCategory';

function Events() {
  return (
    <div>
      <SearchSection />
      <EventsSection showTabs />
      <EventCategory />

    </div>
  )
}

export default Events
