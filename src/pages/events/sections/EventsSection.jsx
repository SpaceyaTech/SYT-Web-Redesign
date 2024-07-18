import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Import react-icons

import { useEventsCategories } from "../../../hooks/Queries/eventsSection/useEventCategories";
import useEventsData from "../../../hooks/Queries/eventsSection/useEvents";
import { Loader } from "../../../components";
import { EventCard } from "../../community/sections/eventsPreview/SingleEvents/sections";

function EventsSection() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: eventCategories } = useEventsCategories();

  const categories =
    Array.isArray(eventCategories) && eventCategories.map((cat) => cat.name);

  const { data: eventsData, isPending, isSuccess } = useEventsData();

  useEffect(() => {
    setEvents(eventsData?.results);
  }, [eventsData?.results]);

  const uniqueCat =
    Array.isArray(categories) &&
    eventsData?.results
      .filter((cat) => categories.includes(cat.category.name))
      .map((cate) => cate.category.name);

  const uniqueCategory = Array.isArray(uniqueCat) && [
    "",
    ...new Set(uniqueCat),
  ];

  const filterEvents = (cat) => {
    setSelected(cat);
    cat === ""
      ? setEvents(eventsData?.results)
      : setEvents(eventsData?.results.filter((ev) => cat === ev.category.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = Array.isArray(events)
    ? events?.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : events;

  return (
    <section className="mt-2 py-6 flex flex-col items-center justify-between gap-4 w-full">
      {/* search events */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center border w-full justify-between sm:w-7/12 max-w-md mb-3 rounded-xl bg-white overflow-clip relative"
      >
        <span className="py-3 pl-4 absolute top-0.5 left-0 hidden sm:block">
          <AiOutlineSearch className="size-5 text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search Event"
          className="flex-grow p-3 sm:pl-12 outline-none text-gray-400 w-4/5 "
          onChange={handleSearch}
        />
        <button
          type="submit"
          className="bg-gradient-to-b to-primary from-green-dark px-1.5 sm:px-6 py-3 text-white"
        >
          Search
        </button>
      </form>

      {/* Tabs */}
      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading events...</p>
        </div>
      )}

      {isSuccess && (
        <div className="w-full flex items-center flex-col">
          <div className="flex items-center justify-between mb-6 gap-12">
            {isSuccess && (
              <div className="flex items-center justify-center space-x-4 w-full md:w-fit mx-auto overflow-auto">
                {uniqueCategory.map((category) => (
                  <button
                    key={category}
                    onClick={() => filterEvents(category)}
                    type="button"
                    className={`w-full text-nowrap rounded-xl py-3 px-6 text-xs font-normal border ring-offset-0 focus:outline-none focus:ring-0 ${
                      selected === category
                        ? "bg-gradient-to-b to-primary from-green-dark text-white"
                        : "flex-center text-black bg-white hover:bg-gradient-to-b to-primary from-green-dark hover:text-white"
                    }`}
                  >
                    {category === "" ? "All" : category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8">
            {/* {Array.isArray(events) &&
              events.map((event) => <EventCard key={event.id} event={event} />)} */}
            {filteredEvents?.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default EventsSection;
