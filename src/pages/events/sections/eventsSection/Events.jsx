 
 
 
 
import PropTypes from "prop-types";
import { EventCard } from "../../../community/sections/eventsPreview/SingleEvents/sections";

function Events({ events }) {
  return (
    <div className="mx-auto my-6 max-w-1216 w-full grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8 justify-between px-4 xl:px-0">
      {events &&
        Array.isArray(events) &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
}

export default Events;

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
