import PropTypes from "prop-types";
import { FaCalendarDay, FaGlobe } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  eventCardPhysical,
  eventCardVirtual,
} from "../../../../../../assets/images/community";
import LocationTag from "./LocationTag";

function EventCard({ event }) {
  const isVirtual = event?.mode === "Virtual";

  return (
    <div
      className="w-full h-[530px] flex flex-col rounded-xl bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${
          isVirtual ? eventCardVirtual : eventCardPhysical
        })`,
      }}
    >
      <div className="h-2/3 p-6 flex flex-col justify-end gap-2">
        <LocationTag isVirtual={isVirtual} />

        <h3
          className={`text-2xl font-medium line-clamp-2 ${
            isVirtual ? "text-white" : "text-green-header"
          }`}
        >
          {event?.name}
        </h3>
      </div>

      <div className="h-1/3 bg-white p-6 flex-between flex-col gap-2">
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2 lg:gap-x-16 lg:gap-y-6">
          <div className="flex items-center gap-2">
            <FaCalendarDay className="text-grey-neutral text-xl" />

            <span className="text-base text-grey-neutral font-normal">
              {event?.start_date}
            </span>
          </div>

          <div className="flex items-center gap-2 lg:place-self-end">
            <MdOutlineAccessTimeFilled className="text-grey-neutral text-xl" />

            <span className="text-base text-grey-neutral font-normal">
              {event?.start_time}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaGlobe className="text-grey-neutral text-xl" />

            <span className="text-base text-grey-neutral line-clamp-1 font-normal">
              {event?.mode === "Physical" ? event?.location : event?.mode}
            </span>
          </div>

          <div className="flex items-center gap-2 lg:place-self-end">
            <IoMdPricetag className="text-grey-neutral text-xl" />

            <span className="text-base text-grey-neutral text-nowrap font-normal">
              {event?.category.name}
            </span>
          </div>
        </div>

        <Link
          to={`/events/${event?.id}`}
          className="w-full border border-primary py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-all ease-in duration-500 text-base font-bold flex-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    chapter: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      socials: PropTypes.shape({
        Twitter: PropTypes.string,
      }),
      members: PropTypes.number.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
};

EventCard.defaultProps = {
  event: {},
};
