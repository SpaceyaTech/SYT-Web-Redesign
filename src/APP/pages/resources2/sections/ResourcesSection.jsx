import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { courses, search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";
// import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

const DifficultyCard = ({ title, selected }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center border ${
        selected ? "border-green-700" : "border-gray-200"
      } rounded-3xl gap-3 p-6 lg:w-48`}
    >
      <div className="w-24 h-24 bg-[#F5FFFD] flex justify-center items-center rounded-full">
        <img src={courses} alt="" className="w-11 object-cover" />
      </div>

      <h4 className="text-base font-normal capitalize">{title}</h4>
    </div>
  );
};

function ResourcesSection() {
  const [searchText, setSearchText] = useState("");
  // const {
  //   data: resourceTypes,
  //   isLoading,
  //   isError,
  //   isSuccess,
  // } = useResourcesData();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <>
      {/* {isError && <p>Error loading resource categories!</p>}
      {isLoading && <p>Loading resource categories...</p>} */}
      {/* {isSuccess && ( */}
      <div className="flex flex-col gap-12">
        <div className="flex self-stretch flex-row mx-auto w-full md:w-fit border-[#CBCDCC] border-2 rounded-[36px] px-4 py-3">
          <input
            type="text"
            placeholder="Search resources"
            className="h-10 md:w-[50vw] w-full border-none outline-none"
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

        <div className="w-full flex items-center flex-col gap-4 md:gap-8">
          {/* mobile difficulty filter */}
          <div className="flex md:hidden items-center justify-between w-full px-0 sm:px-3">
            <button className="text-xs leading-5 font-medium px-[10px] py-2 border border-[#009975] rounded-lg bg-[#00CC9C] text-white">
              Beginners
            </button>
            <button className="text-xs leading-5 font-medium px-[10px] py-2 border border-[#009975] rounded-lg bg-white text-black">
              Intermediate
            </button>
            <button className="text-xs leading-5 font-medium px-[10px] py-2 border border-[#009975] rounded-lg bg-white text-black">
              Advanced
            </button>
          </div>

          {/* Field filter */}
          <div className="flex items-center flex-wrap gap-4 md:gap-8 text-xs justify-center w-full md:w-max md:justify-between mt-4">
            <button className="px-3 py-2 capitalize font-normal border-none bg-gray-100 rounded-2xl">
              Software development
            </button>
            <button className="px-3 py-2 capitalize font-normal border-none bg-[#009975] text-white rounded-2xl ">
              Design
            </button>
            <button className="px-3 py-2 capitalize font-normal border-none bg-gray-100 rounded-2xl">
              UX research
            </button>
            <button className="px-3 py-2 capitalize font-normal border-none bg-gray-100 rounded-2xl">
              mobile development
            </button>
            <button className="px-3 py-2 capitalize font-normal border-none bg-gray-100 rounded-2xl">
              Data Science
            </button>
          </div>

          {/* ResourceCard Wrapper & Desktop Difficulty filters */}
          <div className="flex items-center w-full md:gap-2">
            <div className="w-1/5 lg:w-1/4 hidden md:flex flex-col gap-8 justify-center items-center">
              <DifficultyCard title="beginner" selected />
              <DifficultyCard title="Intermediate" />
              <DifficultyCard title="advanced" />
            </div>
            <div className="w-full md:w-4/5 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:px-2">
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
            </div>
          </div>

          <Stack spacing={2}>
            <Pagination count={4} shape="rounded" />
          </Stack>
        </div>
      </div>
    </>
  );
}

export default ResourcesSection;
