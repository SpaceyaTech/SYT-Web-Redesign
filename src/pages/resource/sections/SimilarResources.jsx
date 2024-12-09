import React from "react";
import ResourceCard from "../../resources-home/sections/ResourceCard";

function SimilarResources() {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-xl space-y-2 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-black font-semibold">
          Explore more on this topic
        </h3>
        <p className="text-base leading-tight text-gray-500">
          These additional resources will help you understand this topic better
        </p>
      </div>

      <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll scrollbar-2 w-full md:w-auto pb-6">
        {Array.from({ length: 10 }).map((item) => (
          <ResourceCard key={item} />
        ))}
      </div>
    </section>
  );
}

export default SimilarResources;
