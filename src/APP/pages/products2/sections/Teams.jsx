import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { teams } from "../data";
import { upleftGreen } from "../../../../assets/images/icons";
import DeveloperCard from "./DeveloperCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Teams = () => {
  let [categories] = useState(teams);

  return (
    <section className="p-3 md:p-6 flex flex-col md:flex-row gap-6 md:gap-4 mb-4 md:mb-8">
      {/* Header */}
      <div className="w-full md:w-1/3 gap-3 md:gap-6">
        <h3 className="text-[25px] font-medium leading-9 md:text-5xl md:leading-normal">
          Backed by a team of Global Talents.
        </h3>

        <Link
          to="/community"
          // target="_blank"
          // rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2"
        >
          <span className="text-base md:text-[32px] md:leading-normal text-[#009975] font-medium">
            Join us
          </span>
          <img
            src={upleftGreen}
            alt="upleft"
            className="h-6 w-6 md:h-10 md:w-10 object-contain"
          />
        </Link>
      </div>

      {/* Tabs */}
      <div className="w-full md:w-2/3">
        <Tab.Group>
          <Tab.List className="flex space-x-2 justify-between w-full overflow-x-auto bg-transparent p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "min-w-fit w-fit rounded-[40px] py-2 px-4 text-base font-light leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-gray-600 focus:outline-none",
                    selected
                      ? "bg-[#009975] font-medium text-white"
                      : "bg-[#f8f8f8] font-normal"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-1 md:mt-2 w-full">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "bg-white grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 lg:gap-12 w-full"
                )}
              >
                {posts.map(({ id, name, title, headshot, portfolio }) => (
                  <DeveloperCard
                    key={id}
                    name={name}
                    title={title}
                    headshot={headshot}
                    portfolio={portfolio}
                  />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Teams;
