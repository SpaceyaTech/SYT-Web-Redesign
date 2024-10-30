import PropTypes from "prop-types";
import React from "react";
import formatEventDescription from "../../../../../../utilities/formatEventDescription";

function EventDescription({ eventDesc }) {
  return (
    <div className="w-full max-w-3xl mx-auto text-sm md:text-[15px] md:leading-[22px] font-normal text-gray-600">
      {formatEventDescription(eventDesc)}
    </div>
  );
}

export default EventDescription;

EventDescription.propTypes = {
  eventDesc: PropTypes.string.isRequired,
};
