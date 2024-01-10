import React from "react";

// import {
//   MasterBase,
//   mpesapayments,
//   techrecruiters,
//   mentorlst,
//   uxhiringafrica,
// } from '../../../../assets/images/community';
import Events from "../../events/sections/eventsSection/Events";

function UpcomingEventSection({ events }) {
  return (
    <div className="pb-6 px-6">
      {events
        ? events.length !== 0 && (
            <div className="flex flex-row justify-between">
              <div>
                <h2 className="text-lg font-normal text-[#323433] pb-4 md:pb-4 ">
                  Upcoming Events
                </h2>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-sm font-normal text-primary mr-2">
                  PAST EVENTS
                </p>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3172 7.44254L9.69219 13.0675C9.57491 13.1848 9.41585 13.2507 9.25 13.2507C9.08415 13.2507 8.92509 13.1848 8.80781 13.0675C8.69054 12.9503 8.62465 12.7912 8.62465 12.6253C8.62465 12.4595 8.69054 12.3004 8.80781 12.1832L13.3664 7.62535H1.125C0.95924 7.62535 0.800269 7.5595 0.683058 7.44229C0.565848 7.32508 0.5 7.16611 0.5 7.00035C0.5 6.83459 0.565848 6.67562 0.683058 6.55841C0.800269 6.4412 0.95924 6.37535 1.125 6.37535H13.3664L8.80781 1.81753C8.69054 1.70026 8.62465 1.5412 8.62465 1.37535C8.62465 1.2095 8.69054 1.05044 8.80781 0.93316C8.92509 0.815885 9.08415 0.75 9.25 0.75C9.41585 0.75 9.57491 0.815885 9.69219 0.93316L15.3172 6.55816C15.3753 6.61621 15.4214 6.68514 15.4529 6.76101C15.4843 6.83688 15.5005 6.91821 15.5005 7.00035C15.5005 7.08248 15.4843 7.16381 15.4529 7.23969C15.4214 7.31556 15.3753 7.38449 15.3172 7.44254Z"
                    fill="#009975"
                  />
                </svg>
              </div>
            </div>
          )
        : ""}
      <Events events={events} isVertical={false} />
    </div>
  );
}

export default UpcomingEventSection;
