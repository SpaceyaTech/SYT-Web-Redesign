import React, { useState } from "react";
import { search } from "../../../../assets/images/resources-page";
import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

const ResourcesInput = () => {
  const [searchText, setSearchText] = useState("");

  const {
    data: resourceTypes,
    isLoading,
    isError,
    isSuccess,
  } = useResourcesData();

  const handleSearch = (e) => {
    e.preventDefault();
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
            </div>
          </>
        )
      )}
    </>
  );
};

export default ResourcesInput;
