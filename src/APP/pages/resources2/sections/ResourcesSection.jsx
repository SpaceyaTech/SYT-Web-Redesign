import React, { useState } from "react";
import { Tab } from "@headlessui/react";

import { search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";
import { resourcesData } from "./data";

// function DifficultyCard({ title, selected }) {
//   return (
//     <div
//       className={`flex flex-col justify-center items-center border ${
//         selected ? "border-green-700" : "border-gray-200"
//       } rounded-3xl gap-3 p-6 lg:w-48`}
//     >
//       <div className="w-24 h-24 bg-[#F5FFFD] flex justify-center items-center rounded-full">
//         <img src={courses} alt="" className="w-11 object-cover" />
//       </div>

//       <h4 className="text-base font-normal capitalize">{title}</h4>
//     </div>
//   );
// }
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
          <img src={search} alt="search" className="p-2 cursor-pointer" />
        </div>
      </div>

      <Tab.Group>
        <Tab.List className="flex space-x-2 justify-between w-full overflow-x-auto bg-transparent p-1">
          {resourcesData.map(({ id, topic }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                // eslint-disable-next-line implicit-arrow-linebreak
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
          {resourcesData.map(({ id, resources }) => (
            <Tab.Panel
              key={id}
              className={classNames(
                "bg-white grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 lg:gap-12 w-full"
              )}
            >
              {resources.map(
                ({
                  id,
                  type,
                  title,
                  description,
                  image,
                  origin,
                  level,
                  topic,
                }) => (
                  <ResourceCard
                    key={id}
                    type={type}
                    title={title}
                    description={description}
                    image={image}
                    origin={origin}
                    level={level}
                    topic={topic}
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
