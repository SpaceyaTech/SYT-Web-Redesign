import React from "react";

function AddEventPage() {
  return (
    <div className="px-5 sm:px-14 xl:px-28 sm:m-auto max-w-screen-2xl">
      <div className="space-y-3">
        <p className="text-xs font-medium text-[#656767]">Events</p>
        <h1 className="text-2xl text-[#323433]">Create Event</h1>
        <p className="text-[#656767]">Add new event details</p>
      </div>

      {/* Form */}
      <form className="px-3 sm:px-20 py-3 sm:py-12 my-10 border border-[#989A9A] rounded-2xl space-y-4">
        <input
          type="text"
          name="event-name"
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Event Name"
        />
        <textarea
          type="text"
          name="about-event"
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="About Event"
        />
        <select
          name="chapter"
          placeholder="SYT Chapter"
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
        >
          <option value="Tanzania">SYT Tanzania</option>
          <option value="Nairobi">SYT Nairobi</option>
        </select>
        <input
          type="text"
          name="event-link"
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Event Link"
        />
        <select
          name="location"
          placeholder="Location"
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
        >
          <option value="Sarit-center">Sarit center</option>
          <option value="Twitter">Twitter Spaces</option>
        </select>
        <input
          type="date"
          name="event-date"
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Select Date"
        />
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <input
            type="time"
            name="start-time"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Start Time"
          />
          <input
            type="time"
            name="end-time"
            className="mt-4 sm:mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="End Time"
          />
        </div>
        {/* file upload */}
        <div className="py-6 overflow-hidden relative flex items-center justify-center border border-dashed border-[#656767] rounded">
          <span className="text-sm text-[#49454F] text-center">
            Upload Event Poster
            <br />
            PNG, JPG, JFIF
          </span>
          <input
            type="file"
            className="cursor-pointer opacity-0 text-base text-[#49454F] absolute block w-full h-full"
            placeholder="PNG, JPG, JFIF"
          />
        </div>

        {/* buttons */}
        <div className="flex justify-between sm:justify-end space-x-4">
          <a
            href="/admin/events"
            type="button"
            className="hover:bg-[#009975] text-center text-[#7E8180] hover:text-white rounded-lg border hover:border-0 py-3 px-5 sm:px-8 w-full sm:w-52 border-[#7E8180] focus:outline-none"
          >
            Cancel
          </a>

          <a
            href="/admin/events/add-event"
            type="submit"
            className="bg-[#009975] text-center text-white rounded-lg border-0 py-3 px-5 sm:px-8 w-full sm:w-52 hover:bg-white hover:border hover:border-[#009975] hover:text-[#009975] focus:outline-none"
          >
            Add Event
          </a>
        </div>
      </form>
    </div>
  );
}

export default AddEventPage;
