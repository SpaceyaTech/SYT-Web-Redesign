/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  calculateDistanceToDate,
  formatEventTime,
  startEventDate,
} from "../../../../utilities/formatEventDate";
import { Loader, ViewMoreBtn } from "../../../components";
import Error500 from "../../errorPages/Error500";
import useTopEvents from "@/hooks/Queries/eventsSection/useTopEvents";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { error500svg } from "../../../../assets/images/errorPages";

function OurEvents() {
  const {
    data: topEvents,
    isPending,
    isError,
    isSuccess,
    refetch: refetchTopEvents,
  } = useTopEvents("");

  useEffect(() => {
    refetchTopEvents();
  }, [refetchTopEvents]);

  return (
    <section className="w-full max-w-1440 mx-auto flex-center flex-col gap-8 px-3 pt-2">
      <div className="flex-center gap-4 flex-col w-full max-w-2xl text-center">
        <h3 className="max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
          You can’t spell community without meet-up{" "}
        </h3>

        <p className="text-sm md:text-base font-normal">
          SpaceYaTech is a community that goes beyond the world of ones and
          zeros, ensuring holistic growth for it’s members. Meet a group of
          like-minded individuals, unwind, network and find your next venture in
          life.
        </p>
      </div>

      <div className="md:h-[720px] flex-between w-full flex-row">
        <div className="hidden md:flex flex-col gap-4 pl-12 lg:pl-24 w-1/2">
          <h4 className="text-green-dark text-[32px] leading-normal font-semibold">
            Upcoming Events
          </h4>
          <ViewMoreBtn link="/all-events" />
        </div>

        {isError && (
          <div className="size-full flex-center flex-col gap-4">
            <LazyLoadImage
              src={error500svg}
              alt="error-500"
              effect="blur"
              className="size-full md:size-[600px] object-cover"
            />
            <span className="text-red-500 text-base font-semibold">
              Error fetching Events!
            </span>
          </div>
        )}
        {isPending && (
          <div className="flex flex-col items-center justify-center size-full gap-4 py-10">
            <Loader />
            <p className="text-lg font-medium text-primary">
              Loading events...
            </p>
          </div>
        )}

        {isSuccess && (
          <div className="py-4 flex flex-row md:flex-col gap-4 md:pr-8 overflow-x-scroll md:overflow-y-scroll h-full md:py-2 w-full md:w-1/2 scrollbar">
            {topEvents?.count === 0 ? (
              <p className="">No events found!</p>
            ) : (
              topEvents?.results.map((event) => (
                <UpcomingEventCard key={event.id} event={event} />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default OurEvents;

function UpcomingEventCard({ event }) {
  const [month, day] = startEventDate(event.start_date);
  const eventTime = formatEventTime(event);
  const daysAway = calculateDistanceToDate(event.start_date);

  return (
    <Link
      to={`/events/${event.id}`}
      className="bg-white border flex items-center flex-col md:flex-row justify-start w-full rounded-xl p-4 gap-4"
    >
      <div className="border bg-white p-1 rounded-lg w-full md:w-fit">
        <div className="flex-center flex-col bg-green-light text-green-dark aspect-video md:size-[120px] rounded-[4px] font-bold">
          <span className="text-sm">{month}</span>
          <h4 className="text-5xl">{day}</h4>
        </div>
      </div>

      <div className="flex-start flex-col gap-2.5 w-full">
        <h5 className="text-green-dark text-base leading-tight font-semibold uppercase text-nowrap md:text-wrap">
          {event.name}
        </h5>

        <div className="flex items-center gap-2 text-gray-500">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 5.66699C9.88193 5.66699 9.27775 5.85027 8.76384 6.19365C8.24994 6.53703 7.8494 7.02509 7.61288 7.59611C7.37635 8.16713 7.31447 8.79546 7.43505 9.40165C7.55562 10.0078 7.85325 10.5647 8.29029 11.0017C8.72733 11.4387 9.28415 11.7364 9.89034 11.8569C10.4965 11.9775 11.1249 11.9156 11.6959 11.6791C12.2669 11.4426 12.755 11.0421 13.0983 10.5281C13.4417 10.0142 13.625 9.41006 13.625 8.79199C13.625 7.96319 13.2958 7.16833 12.7097 6.58228C12.1237 5.99623 11.3288 5.66699 10.5 5.66699ZM10.5 10.667C10.1292 10.667 9.76665 10.557 9.45831 10.351C9.14996 10.145 8.90964 9.85214 8.76773 9.50952C8.62581 9.16691 8.58868 8.78991 8.66103 8.4262C8.73337 8.06248 8.91195 7.72839 9.17417 7.46617C9.4364 7.20394 9.77049 7.02537 10.1342 6.95302C10.4979 6.88067 10.8749 6.9178 11.2175 7.05972C11.5601 7.20163 11.853 7.44196 12.059 7.7503C12.265 8.05864 12.375 8.42115 12.375 8.79199C12.375 9.28927 12.1775 9.76619 11.8258 10.1178C11.4742 10.4694 10.9973 10.667 10.5 10.667ZM10.5 1.91699C8.67727 1.91906 6.92979 2.64405 5.64092 3.93292C4.35206 5.22178 3.62707 6.96926 3.625 8.79199C3.625 11.2451 4.75859 13.8451 6.90625 16.3115C7.87127 17.426 8.95739 18.4296 10.1445 19.3037C10.2496 19.3773 10.3748 19.4168 10.5031 19.4168C10.6314 19.4168 10.7566 19.3773 10.8617 19.3037C12.0467 18.4292 13.1307 17.4257 14.0938 16.3115C16.2383 13.8451 17.375 11.2451 17.375 8.79199C17.3729 6.96926 16.6479 5.22178 15.3591 3.93292C14.0702 2.64405 12.3227 1.91906 10.5 1.91699ZM10.5 18.0107C9.20859 16.9951 4.875 13.2646 4.875 8.79199C4.875 7.30015 5.46763 5.86941 6.52252 4.81452C7.57742 3.75962 9.00816 3.16699 10.5 3.16699C11.9918 3.16699 13.4226 3.75962 14.4775 4.81452C15.5324 5.86941 16.125 7.30015 16.125 8.79199C16.125 13.2631 11.7914 16.9951 10.5 18.0107Z"
              fill="#828282"
            />
          </svg>

          <span className="text-sm font-normal">{event.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 2.20801C8.89303 2.20801 7.32214 2.68453 5.986 3.57732C4.64985 4.4701 3.60844 5.73906 2.99348 7.2237C2.37852 8.70835 2.21762 10.342 2.53112 11.9181C2.84463 13.4942 3.61846 14.9419 4.75476 16.0783C5.89106 17.2146 7.3388 17.9884 8.9149 18.3019C10.491 18.6154 12.1247 18.4545 13.6093 17.8395C15.094 17.2246 16.3629 16.1832 17.2557 14.847C18.1485 13.5109 18.625 11.94 18.625 10.333C18.6227 8.17882 17.766 6.11352 16.2427 4.59028C14.7195 3.06704 12.6542 2.21028 10.5 2.20801ZM10.5 17.208C9.14026 17.208 7.81105 16.8048 6.68046 16.0494C5.54987 15.2939 4.66868 14.2202 4.14833 12.964C3.62798 11.7077 3.49183 10.3254 3.7571 8.99176C4.02238 7.65814 4.67716 6.43314 5.63864 5.47165C6.60013 4.51016 7.82514 3.85538 9.15876 3.59011C10.4924 3.32484 11.8747 3.46098 13.131 3.98134C14.3872 4.50169 15.4609 5.38287 16.2164 6.51346C16.9718 7.64405 17.375 8.97326 17.375 10.333C17.3729 12.1557 16.6479 13.9032 15.3591 15.1921C14.0702 16.4809 12.3227 17.2059 10.5 17.208ZM15.5 10.333C15.5 10.4988 15.4342 10.6577 15.3169 10.775C15.1997 10.8922 15.0408 10.958 14.875 10.958H10.5C10.3342 10.958 10.1753 10.8922 10.0581 10.775C9.94085 10.6577 9.875 10.4988 9.875 10.333V5.95801C9.875 5.79225 9.94085 5.63328 10.0581 5.51607C10.1753 5.39886 10.3342 5.33301 10.5 5.33301C10.6658 5.33301 10.8247 5.39886 10.9419 5.51607C11.0592 5.63328 11.125 5.79225 11.125 5.95801V9.70801H14.875C15.0408 9.70801 15.1997 9.77386 15.3169 9.89107C15.4342 10.0083 15.5 10.1672 15.5 10.333Z"
              fill="#828282"
            />
          </svg>

          <span className="text-sm font-normal">{eventTime}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M15.6833 7.55746C15.7413 7.49935 15.8103 7.45325 15.8862 7.4218C15.962 7.39035 16.0434 7.37416 16.1255 7.37416C16.2076 7.37416 16.289 7.39035 16.3648 7.4218C16.4407 7.45325 16.5096 7.49935 16.5677 7.55746L19.0677 10.0575C19.1258 10.1155 19.1719 10.1844 19.2033 10.2603C19.2348 10.3362 19.251 10.4175 19.251 10.4997C19.251 10.5818 19.2348 10.6631 19.2033 10.739C19.1719 10.8149 19.1258 10.8838 19.0677 10.9418L16.5677 13.4418C16.4504 13.5591 16.2913 13.625 16.1255 13.625C15.9596 13.625 15.8006 13.5591 15.6833 13.4418C15.566 13.3246 15.5001 13.1655 15.5001 12.9997C15.5001 12.8338 15.566 12.6747 15.6833 12.5575L17.1169 11.1247H3.88409L5.31768 12.5575C5.43495 12.6747 5.50084 12.8338 5.50084 12.9997C5.50084 13.1655 5.43495 13.3246 5.31768 13.4418C5.2004 13.5591 5.04134 13.625 4.87549 13.625C4.70964 13.625 4.55058 13.5591 4.4333 13.4418L1.9333 10.9418C1.87519 10.8838 1.82909 10.8149 1.79764 10.739C1.76619 10.6631 1.75 10.5818 1.75 10.4997C1.75 10.4175 1.76619 10.3362 1.79764 10.2603C1.82909 10.1844 1.87519 10.1155 1.9333 10.0575L4.4333 7.55746C4.55058 7.44019 4.70964 7.3743 4.87549 7.3743C5.04134 7.3743 5.2004 7.44019 5.31768 7.55746C5.43495 7.67474 5.50084 7.8338 5.50084 7.99965C5.50084 8.1655 5.43495 8.32456 5.31768 8.44184L3.88409 9.87465H17.1169L15.6833 8.44184C15.6252 8.38379 15.5791 8.31486 15.5476 8.23899C15.5162 8.16312 15.5 8.08179 15.5 7.99965C15.5 7.91752 15.5162 7.83619 15.5476 7.76031C15.5791 7.68444 15.6252 7.61551 15.6833 7.55746Z"
              fill="#828282"
            />
          </svg>

          <span className="text-sm font-normal">{daysAway}</span>
        </div>
      </div>
    </Link>
  );
}
