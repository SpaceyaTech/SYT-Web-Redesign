import React, { useState } from "react";
import {
  eachDayOfInterval,
  format,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  subDays,
  addDays,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const meetings = [
  {
    id: 1,
    title: "How to Master Database Engineering using SQL",
    location: "Twitter Spaces",
    tag: "red-800",
    startDatetime: "2023-09-11T13:00",
    endDatetime: "2023-09-11T14:30",
  },
  {
    id: 2,
    title: "How to Master Database Engineering using SQL",
    location: "Sarit Center, Nairobi",
    tag: "blue-800",
    startDatetime: "2023-09-09T13:00",
    endDatetime: "2023-09-09T14:30",
  },
  {
    id: 3,
    title: "How to Master Database Engineering using SQL",
    location: "Twitter Spaces",
    tag: "red-800",
    startDatetime: "2023-09-20T17:00",
    endDatetime: "2023-09-20T18:30",
  },
  {
    id: 4,
    title: "How to Master Database Engineering using SQL",
    location: "Twitter Spaces",
    tag: "red-800",
    startDatetime: "2023-09-09T13:00",
    endDatetime: "2023-09-09T14:30",
  },
  {
    id: 5,
    title: "How to Master Database Engineering using SQL",
    location: "Sarit Center, Nairobi",
    tag: "blue-800",
    startDatetime: "2023-09-13T14:00",
    endDatetime: "2023-09-13T14:30",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EventCard({ event }) {
  const startDateTime = parseISO(event.startDatetime);
  const endDateTime = parseISO(event.endDatetime);

  return (
    <div className="bg-[#CCFFF3] w-64 rounded h-32 px-4 py-2">
      <h1 className="font-medium text-sm sm:text-base">{event.title}</h1>
      <p className="font-medium text-xs pt-2 sm:pt-1">
        {" "}
        <time dateTime={event.startDatetime}>
          {format(startDateTime, "h:mm a")}
        </time>{" "}
        -{" "}
        <time dateTime={event.endDatetime}>
          {format(endDateTime, "h:mm a")}
        </time>
      </p>
      <div className="pt-2 sm:pt-5 flex justify-between">
        <p className="text-xs">{event.location}</p>
        <span className={`bg-${event.tag} h-6 w-6 rounded-3xl`} />
      </div>
    </div>
  );
}

function Calendar() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const [startDate, setStartDate] = useState(subDays(new Date(), 4));
  const endDate = addDays(startDate, 10);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  function previousWeek() {
    setStartDate(subDays(startDate, 11));
  }

  function nextWeek() {
    setStartDate(addDays(startDate, 11));
  }

  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className="mx-5 sm:mx-0 my-12 grid grid-cols-4 border rounded">
      <div className="col-span-4 border-b flex justify-end py-4 px-4 space-x-4 text-[#323433]">
        <button
          type="button"
          onClick={previousWeek}
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-5 h-5"
            aria-hidden="true"
          />
        </button>
        <button
          onClick={nextWeek}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-5 h-5"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className="rounded px-4 py-1 text-xs bg-white border hover:bg-[#F5FFFD] border-[#79747E] hover:border-[#009975] hover:text-primary"
        >
          Daily
        </button>
        <button
          type="button"
          className="rounded px-4 py-1 text-xs bg-white border hover:bg-[#F5FFFD] border-[#79747E] hover:border-[#009975] hover:text-primary"
        >
          Monthly
        </button>
      </div>

      <div className="border-r border-b h-24 flex items-center justify-center">
        Chapters
      </div>
      <div className="col-span-3 border-b px-10 pt-2 h-24">
        <div className="grid grid-cols-11 gap-20 sm:gap-0 mt-2 text-sm overflow-scroll">
          {days.map((day, dayIdx) => (
            <div key={day.toString()}>
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && "text-white",
                  !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "border-[#0061CC]",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-[#323433]",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-500",
                  isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "text-black bg-[#0061CC]",
                  isEqual(day, selectedDay) && !isToday(day) && "bg-[#0061CC]",
                  !isEqual(day, selectedDay) && "hover:bg-gray-200",
                  isToday(day) &&
                    "font-normal text-[#323433] border-2 border-[#0061CC]",
                  "mx-auto flex h-14 w-12 items-center justify-center rounded-lg flex-col space-y-1"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "eee")}
                </time>
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>

              <div className="w-1 h-1 mx-auto mt-1">
                {meetings.some((meeting) =>
                  isSameDay(parseISO(meeting.startDatetime), day)
                ) && <div className="w-1 h-1 rounded-full bg-[#0061CC]" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-r border-b h-44 flex items-center justify-center text-center">
        SYT Nairobi
      </div>
      <div className="col-span-3 border-b flex items-center overflow-scroll px-10 ">
        <div className="flex w-screen space-x-8">
          {selectedDayMeetings.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div className="border-r h-44 flex items-center justify-center text-center">
        SYT Tanzania
      </div>
      <div className="col-span-3 flex items-center overflow-scroll px-10 ">
        <div className="flex w-screen space-x-8">
          {selectedDayMeetings.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
