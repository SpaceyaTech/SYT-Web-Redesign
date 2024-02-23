import React, { useState } from "react";

import { courses, search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";

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

      <div className="border">resources page</div>
    </>
  );
}

export default ResourcesSection;
