import React from "react";
import { Link } from "react-router-dom";

import { fieldData } from "./data";
import ResourceCard from "./ResourceCard";
import ResourceField from "./ResourceField";

function Documentation() {
  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-10 xl:gap-16 pt-8 lg:pt-16 px-5 md:px-8">
      <div>
        <div className="flex justify-between w-full flex-col md:flex-row gap-2 items-center md:items-start">
          <div className="w-full space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-2xl md:text-3xl">
              Projects designed and coded by our alumni
            </h3>
            <p className="text-sm md:text-base text-grey-neutral max-w-[620px]">
              We have hundreds of curated resources to help you learn the next
              language or technology
            </p>
          </div>

          <Link
            to="/resources"
            className="text-sm xl:text-base leading-tight font-normal underline text-primary text-nowrap"
          >
            See all documentations
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </div>

      <div className=" w-full flex flex-col gap-3 md:gap-6">
        <h4 className="text-green-hero text-xl md:text-2xl font-semibold text-center">
          Explore popular resources in
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {fieldData.map(({ id, img, numberOfResources, title }) => (
            <ResourceField
              key={id}
              img={img}
              numberOfResources={numberOfResources}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Documentation;
