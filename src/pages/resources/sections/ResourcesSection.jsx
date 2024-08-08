import { Tab } from "@headlessui/react";
import { useState } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { resourcesData } from "./data";
import ResourceCard from "./ResourceCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// million-ignore
function ResourcesSection() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="flex self-stretch flex-row mx-auto w-full md:w-fit border-[#CBCDCC] border-2 rounded-[36px] px-4 py-3">
          <input
            type="text"
            placeholder="Search resources"
            className="h-10 md:w-[50vw] w-full border-none outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="p-2">
            <FaMagnifyingGlass className="cursor-pointer size-5 text-gray-400" />
          </span>
        </div>
      </div>

      <Tab.Group>
        <Tab.List className="flex space-x-2 justify-between w-full overflow-x-auto bg-transparent p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "min-w-fit w-fit rounded-[40px] py-2 px-4 text-base font-light leading-5",
                "ring-white/60 ring-offset-2 ring-offset-gray-600 focus:outline-none",
                selected
                  ? "bg-primary font-medium text-white"
                  : "bg-[#f8f8f8] font-normal"
              )
            }
          >
            All
          </Tab>

          {resourcesData.map(({ id, topic }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  "min-w-fit w-fit rounded-[40px] py-2 px-4 text-base font-light leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-gray-600 focus:outline-none",
                  selected
                    ? "bg-primary font-medium text-white"
                    : "bg-[#f8f8f8] font-normal"
                )
              }
            >
              {topic}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel
            className={classNames(
              "bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 lg:gap-12 w-full"
            )}
          >
            {resourcesData
              .flatMap(({ resources }) => resources)
              .map(
                ({
                  id,
                  type,
                  title,
                  description,
                  image,
                  origin,
                  level,
                  link,
                }) => (
                  <ResourceCard
                    key={id}
                    type={type}
                    title={title}
                    description={description}
                    image={image}
                    origin={origin}
                    level={level}
                    link={link}
                  />
                )
              )}
          </Tab.Panel>

          {resourcesData.map(({ id, resources }) => (
            <Tab.Panel
              key={id}
              className={classNames(
                "bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 lg:gap-12 w-full"
              )}
            >
              {resources.map(
                ({
                  type,
                  title,
                  description,
                  image,
                  origin,
                  level,
                  topic,
                  link,
                }) => (
                  <ResourceCard
                    key={crypto.randomUUID()}
                    type={type}
                    title={title}
                    description={description}
                    image={image}
                    origin={origin}
                    level={level}
                    topic={topic}
                    link={link}
                  />
                )
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default ResourcesSection;
