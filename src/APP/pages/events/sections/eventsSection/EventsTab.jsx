import React, { useState } from 'react';

import filterRecentTime from './helpers/FilterRecentTime';

function EventsTab({updateRecentFilter}) {
  const [selectedRecentButton, setSelectedRecentButton] = useState(null);

  const filterRecents = (times) => {
    times === null ?
      updateRecentFilter(null) :
      updateRecentFilter(filterRecentTime(times));
    setSelectedRecentButton((prevState) => {return prevState = times });
  };

  return (
    <div className="pb-6 flex overflow-auto">
      <button className={`${selectedRecentButton !== null && selectedRecentButton == 'today' ? 'bg-[#009975] text-white' :'bg-[#F7F7F7] text-[#4C4D4D]'} hover:bg-[#009975] hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium rounded-full whitespace-nowrap`} onClick={() => filterRecents('today')}>
          Today
        </button>
        <button className={`${selectedRecentButton !== null && selectedRecentButton == 'thisweek' ? 'bg-[#009975] text-white' :'bg-[#F7F7F7] text-[#4C4D4D]'} hover:bg-[#009975] hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium rounded-full ml-4 whitespace-nowrap`} onClick={() => filterRecents('thisweek')}>
          This week
        </button>
        <button className={`${selectedRecentButton !== null && selectedRecentButton == 'weekend' ? 'bg-[#009975] text-white' :'bg-[#F7F7F7] text-[#4C4D4D]'} hover:bg-[#009975] hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium file:px-4 rounded-full ml-4 whitespace-nowrap`} onClick={() => filterRecents('weekend')}>
          This weekend
        </button>
        <button className={`${selectedRecentButton !== null && selectedRecentButton == 'recent' ? 'bg-[#009975] text-white' :'bg-[#F7F7F7] text-[#4C4D4D]'} hover:bg-[#009975] hover:text-white text-sm px-5 py-3.5 text-center inline-flex items-center h-8 font-medium rounded-full ml-4 whitespace-nowrap`} onClick={() => filterRecents('recent')}>
          Recent
        </button>

        { selectedRecentButton &&
        <button className={`bg-[#c4c2c2] text-white hover:bg-red-800 hover:text-white text-sm px-5 text-center inline-flex items-center h-8 font-medium py-2 rounded-full ml-4 whitespace-nowrap`} onClick={() => filterRecents(null)}>
            Clear
        </button> }
    </div>
  )
}

export default EventsTab;
