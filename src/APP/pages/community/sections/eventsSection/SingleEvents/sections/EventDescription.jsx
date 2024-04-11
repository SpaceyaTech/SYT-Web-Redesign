import PropTypes from "prop-types";
import React from "react";

function EventDescription({ eventDesc }) {
  return (
    <div className="w-full text-center max-w-3xl mx-auto text-sm md:text-[15px] md:leading-[22px] font-normal text-gray-600">
      {eventDesc}
    </div>
  );
}

export default EventDescription;

EventDescription.propTypes = {
  eventDesc: PropTypes.string.isRequired,
};
