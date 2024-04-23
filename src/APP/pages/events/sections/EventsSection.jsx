import { Tab } from "@headlessui/react";
import React, { useEffect } from "react";

import { funnel, search } from "../../../../assets/images/icons";
import { useEventsCategories } from "../../../../hooks/Queries/eventsSection/useEventCategories";
import { EventCard } from "../../community/sections/eventsSection/SingleEvents/sections";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EventsSection() {
  const {
    data: eventsCategories,
    isError,
    isSuccess,
    refetch: refetchEventCategories,
  } = useEventsCategories();

  console.log("EventsData: ", eventsCategories);

  const event = {
    id: 15,
    name: "#DSA2024",
    about:
      "#DSA2024 will be held from June 3rd–7th. DeKUTkenya in Nyeri, Kenya, features a Summer School, a workshop, and the opportunity to learn, network, and collaborate.\r\nStay tuned for registration details. We can't wait to see you there!",
    link: "https://www.datascienceafrica.org/",
    location: "D.Kimathi University",
    mode: "Physical",
    city: "Nairobi",
    country: "Kenya",
    start_date: "2024-06-03",
    end_date: "2024-06-07",
    start_time: "08:00:00",
    end_time: "18:00:00",
    poster: "https://apis.spaceyatech.com/media/default-event.svg",
    category: {
      id: 2,
      name: "KE-Communities",
    },
    chapter: {
      id: 1,
      name: "SpaceYaTech",
      about:
        "SpaceYaTech aims to be an innovative community that fosters technology growth in Kenya first, East Africa second, and Africa as a whole. The community's focus has shifted from being a generalist in the tech space to mentoring 10,000 people in technology by the year 2025. At present, SpaceYaTech has a strong Product Design and Front-end mentorship track, with more tracks to be added soon. We believe that by providing mentorship to young Africans between the ages of 18 and 35, we can help them start careers in technology, switch from traditional careers to technology, and found and grow startups in the areas that will impact Africa.",
      city: "Nairobi",
      country: "Kenya",
      socials: {
        Twitter: "https://twitter.com/spaceyatech",
      },
      members: 2335,
    },
    created_at: "2024-02-04T05:58:11.134697+03:00",
    updated_at: "2024-02-04T05:58:11.134736+03:00",
  };

  // const {
  //   data: eventsData,
  //   isError,
  //   isSuccess,
  //   refetch: refetchEventData,
  // } = useEventsData();

  useEffect(() => {
    refetchEventCategories();
  }, [refetchEventCategories]);

  return (
    <section className="mt-2 py-6 flex flex-col items-center justify-between gap-4">
      {/* search events */}
      <form
        action=""
        className="flex items-center border w-7/12 mb-3 rounded-xl bg-white overflow-clip"
      >
        <img src={search} alt="search" className="py-3 pl-6" />
        <input
          type="text"
          placeholder="Search Event"
          className="flex-grow p-3 outline-none text-gray-400"
        />
        <button
          type="submit"
          className="bg-gradient-to-b to-primary from-green-dark px-6 py-3 text-white"
        >
          Search
        </button>
      </form>

      {/* Tabs */}
      <div className="w-full flex items-center flex-col">
        <Tab.Group>
          <div className="flex items-center justify-between mb-6 gap-12">
            {isSuccess && (
              <Tab.List className="flex items-center justify-between space-x-4 w-3/4">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-xl py-3 px-6 text-xs font-normal border",
                      "ring-offset-0 focus:outline-none focus:ring-0",
                      selected
                        ? "bg-gradient-to-b to-primary from-green-dark text-white ring-0"
                        : "text-black bg-white hover:bg-gradient-to-b to-primary from-green-dark hover:text-white"
                    )
                  }
                >
                  All
                </Tab>
                {eventsCategories.map(({ id, name }) => (
                  <Tab
                    key={id}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-xl py-3 px-6 text-xs font-normal border text-nowrap",
                        "ring-offset-0 focus:outline-none focus:ring-0",

                        selected
                          ? "bg-gradient-to-b to-primary from-green-dark text-white"
                          : "text-black bg-white hover:bg-gradient-to-b to-primary from-green-dark hover:text-white"
                      )
                    }
                  >
                    {name}
                  </Tab>
                ))}
              </Tab.List>
            )}

            <div className="flex items-center border bg-white py-2.5 px-4 rounded-xl space-x-3 justify-end">
              <img
                src={funnel}
                alt="funnel"
                className="size-4 object-contain"
              />
              <span className="text-gray-500 text-sm">Filter</span>
            </div>
          </div>

          <Tab.Panels className="mt-2 w-full">
            {Array.from({ length: 5 }).map((i) => (
              <Tab.Panel
                key={crypto.randomUUID()}
                className={classNames(
                  "w-full grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-8"
                )}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <EventCard key={i} event={event} />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

export default EventsSection;
