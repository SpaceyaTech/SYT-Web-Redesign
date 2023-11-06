import React from "react";

function EventsTab() {
  return (
    <div className="pb-6 flex overflow-auto">
      <button className="bg-[#009975] text-sm md:px-5 md:py-3.5 text-center inline-flex items-center h-8  text-white font-medium py-2 px-4 rounded-full whitespace-nowrap">
        Today
      </button>
      <button className="bg-[#F7F7F7] text-sm md:px-5 md:py-3.5 text-center inline-flex items-center h-8  text-[#4C4D4D] font-medium py-2 px-4 rounded-full ml-4 whitespace-nowrap">
        This week
      </button>
      <button className="bg-[#F7F7F7] text-sm md:px-5 md:py-3.5 text-center inline-flex items-center h-8  text-[#4C4D4D] font-medium py-2 px-4 rounded-full ml-4 whitespace-nowrap">
        This month
      </button>
      <button className="bg-[#F7F7F7] text-sm md:px-5 md:py-3.5 text-center inline-flex items-center h-8  text-[#4C4D4D] font-medium py-2 px-4 rounded-full ml-4 whitespace-nowrap">
        Recent
      </button>
    </div>
  );
}

export default EventsTab;
