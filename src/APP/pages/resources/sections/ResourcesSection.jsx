import React, { useState } from "react";
import { search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";
import Levels from "./Levels";
import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

function ResourcesSection() {
  const [searchText, setSearchText] = useState("");
  const [filteredText, setFilteredText] = useState([]);

  const {
    data: resourceTypes,
    isLoading,
    isError,
    isSuccess,
  } = useResourcesData();

  const handleSearch = (e) => {
    e.preventDefault();

    const filterSearch = resourceTypes.filter(
      (search) =>
        search.name.toLowerCase().includes(searchText.toLowerCase()) ||
        search.description.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredText(filterSearch);
  };

  return (
    <>
      {isLoading ? (
        <p className="text-center">Loading resource categories...</p>
      ) : isError ? (
        <p className="text-center">Error loading resource categories!</p>
      ) : (
        isSuccess && (
          <>
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

              <div className="flex justify-center items-start gap-4">
                {resourceTypes && Array.isArray(resourceTypes)
                  ? resourceTypes.map((resource) => (
                      <Levels key={resource.id} resource={resource} />
                    ))
                  : ""}
              </div>

              <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-16 sm:gap-12 gap-8 grid-cols-1">
                {resourceTypes && Array.isArray(resourceTypes)
                  ? resourceTypes.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))
                  : ""}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}

export default ResourcesSection;
