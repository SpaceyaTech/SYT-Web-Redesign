import React from 'react';

function EventsTab() {
  return (
    <div className="pt-6">
      <button className="bg-[#009975] text-sm px-5 py-3.5 text-center inline-flex items-center h-8  text-white font-medium py-2 px-4 rounded-full">
        Today
      </button>
      <button className="bg-[#F7F7F7] text-sm px-5 py-3.5 text-center inline-flex items-center h-8  text-[#4C4D4D] font-medium py-2 px-4 rounded-full ml-4">
        This week
      </button>
      <button className="bg-[#F7F7F7] text-sm px-5 py-3.5 text-center inline-flex items-center h-8  text-[#4C4D4D] font-medium py-2 px-4 rounded-full ml-4">
        This weekend
      </button>
      <button className="bg-[#F7F7F7] text-sm px-5 py-3.5 text-center inline-flex items-center h-8  text-[#4C4D4D] font-medium py-2 px-4 rounded-full ml-4">
        Recent
      </button>
    </div>
  )
}

export default EventsTab;
