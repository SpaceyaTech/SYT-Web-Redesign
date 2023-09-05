import React from 'react';
import Calendar from '../../components/events/Calendar';
import EventsTable from '../../components/events/EventsTable';

function AllEventsPage() {
  return (
    <div className="px-0 sm:px-14 xl:px-28 sm:m-auto max-w-screen-2xl">
      <div className="flex justify-between items-center px-5 sm:px-0">
        <div className="space-y-3">
          <p className="text-xs font-medium text-[#656767]">Events</p>
          <h1 className="text-2xl text-[#323433]">Manage Events</h1>
          <p className="text-[#656767]">All events on the SYT platform</p>
        </div>
        <div>
          <button
            type="button"
            className="bg-[#009975] text-white rounded-lg border-0 py-3 px-5 sm:px-8 sm:w-52 hover:bg-white hover:border hover: border-[#009975] hover:text-[#009975] focus:outline-none"
          >
            <span className="hidden sm:block">Add Event</span>
            <span className="block sm:hidden text-2xl">+</span>
          </button>
        </div>
      </div>

      <Calendar />
      <EventsTable />
    </div>
  );
}

export default AllEventsPage;
