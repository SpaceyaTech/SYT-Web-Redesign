import React, { useState } from "react";

import { search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";
import { resources } from "./data";

function ResourcesSection() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex self-stretch flex-row mx-auto border-[#CBCDCC] border-2 rounded-[30px] px-4">
        <input
          type="text"
          placeholder="Search resources"
          className="h-10 md:w-[50vw] w-[70vw] border-none outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img
          src={search}
          alt="search"
          className="p-2 cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-16 sm:gap-12 gap-8 grid-cols-1">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default ResourcesSection;
