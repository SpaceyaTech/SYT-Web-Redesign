/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import PropTypes from "prop-types";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";
import {
  EventCard,
  LocationTag,
} from "../../../community/sections/eventsSection/SingleEvents/sections";
// import {
//   lightEventCard,
//   darkEventCard,
// } from "../../../../../assets/images/community";
// import formatEventDates from "../../../../../utilities/formatEventDate";
// import { format, parseISO } from "date-fns";
// import {
//   clock,
//   tag,
//   calendar,
//   globe,
// } from "../../../../../assets/images/icons";


function Events({ events }) {
  // const formattedDate = format(parseISO(start_date), "do, MMMM");
  // import formatEventDates from "../../../../../utilities/formatEventDate";
  // import { LazyLoadImage } from "react-lazy-load-image-component";


  return (
    <div
      // className="my-4 md:my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-1216 mx-auto md:pb-10"
      className="mx-auto my-6 max-w-1216 w-full grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8 justify-between px-4 xl:px-0"
      // style={{
      //   gridAutoColumns: "max-content",
      //   gridTemplateRows: "minmax(550px, 400px)",
      // }}
    >
      {events &&
        Array.isArray(events) &&
        events.map((event) => {
          // const date = formatEventDates(
          //   start_date,
          //   start_time,
          //   end_date,
          //   end_time
          // );

          // const [hours, minutes] = start_time.split(":");

          // const date = new Date();
          // date.setHours(hours);
          // date.setMinutes(minutes);

          return (
            <EventCard key={event.id} event={event} />
            // <Link
            //   key={id}
            //   to={`/events/${id}`}
            //   className="cursor-pointer w-4/5 sm:w-96 h-full border border-red-500"
            // >
            //   <div className="relative">
            //     <LazyLoadImage
            //       className=" rounded-t-lg size-full object-cover"
            //       src={
            //         mode.toLowerCase() === "physical"
            //           ? lightEventCard
            //           : darkEventCard
            //       }
            //       alt="Location Icon"
            //     />
            //     <div className="absolute bottom-0 p-6 space-y-4">
            //       <LocationTag
            //         isVirtual={mode.toLowerCase() !== "physical"}
            //       />
            //       <p
            //         className={`text-2xl font-medium ${
            //           mode.toLowerCase() === "physical"
            //             ? "text-green-dark"
            //             : "text-white"
            //         }`}
            //       >
            //         {name}
            //       </p>
            //     </div>
            //   </div>
            //   <div className="p-5 w-full bg-white rounded-b-lg space-y-4">
            //     <div className="flex flex-between">
            //       <div className="space-y-4">
            //         <p className="flex gap-2 items-center">
            //           <LazyLoadImage
            //             src={calendar}
            //             alt="calendar icon"
            //             className="size-5"
            //           />
            //           {format(parseISO(start_date), "do, MMMM")}
            //         </p>
            //         <p className="flex gap-2 items-center">
            //           <LazyLoadImage
            //             src={globe}
            //             alt="globe icon"
            //             className="size-5"
            //           />
            //           {mode.toLowerCase() === "physical" ? (
            //             <p className="line-clamp-1">{location}</p>
            //           ) : (
            //             <a
            //               href={location}
            //               target="_blank"
            //               rel="noreferrer noopener"
            //               className="text-primary"
            //             >
            //               Online
            //             </a>
            //           )}
            //         </p>
            //       </div>
            //       <div className="space-y-4">
            //         <p className="flex gap-2 items-center justify-end">
            //           <LazyLoadImage
            //             src={clock}
            //             alt="clock icon"
            //             className="size-5"
            //           />
            //           {format(date, "HHmm") + " HRS"}
            //         </p>
            //         <p className="flex gap-2 items-center justify-end">
            //           <LazyLoadImage
            //             src={tag}
            //             alt="tag icon"
            //             className="size-5"
            //           />
            //           Development
            //         </p>
            //       </div>
            //     </div>

            //     <button className=" font-semibold text-green-dark hover:text-white bg-transparent border border-green-dark hover:border-none hover:bg-gradient-to-b to-primary from-green-dark py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-full text-center">
            //       Learn More
            //     </button>
            //   </div>
            // </Link>
          );
        })}
    </div>
  );
}

export default Events;

Events.propTypes = {
  events: PropTypes.array,
};
