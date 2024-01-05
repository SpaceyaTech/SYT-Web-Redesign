import React from "react";

function UpdateEventPage() {
  return (
    <div className="px-5 sm:px-14 xl:px-28 sm:m-auto max-w-screen-2xl">
      <div className="space-y-3">
        <p className="text-xs font-medium text-[#656767]">Events</p>
        <h1 className="text-2xl text-[#323433]">Update Event</h1>
        <p className="text-[#656767]">Edit event details</p>
      </div>

      {/* Form */}
      <form className="px-3 sm:px-20 py-3 sm:py-12 my-10 border border-[#989A9A] rounded-2xl space-y-4">
        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            Event Name
          </label>
          <input
            type="text"
            name="event-name"
            className="relative mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Event Name"
            value="Deploying and Managing Applications with Kubernetes"
          />
        </div>
        {/* <div className="relative mb-3">
          <input
            type="text"
            className="peer block min-h-[auto] w-full text-sm rounded-md border border-[#656767] bg-transparent px-3 py-3 mt-1 leading-[1.6] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] focus:ring-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Example label"
            value="Deploying and Managing Applications with Kubernetes"
          />
          <label
            for="exampleFormControlInput1"
            className="peer-focus:bg-white px-1 pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Event Name
          </label>
        </div> */}
        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            About Event
          </label>
          <textarea
            type="text"
            name="about-event"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="About Event"
            value="Microsoft PowerBI is one of the most popular Business Intelligence and Big Data tools in the market today. Most companies use PowerBI to build dashboards that allow them to visualise data essential to operations/management and draw insights from them.
          In this masterclass, you'll learn how to conduct data analysis and data visualisation with PowerBI. You'll work hands-on on building PowerBI dashboards as you learn from data experts from KPMG, EY, and Zindua School. At the end of the workshop, you'll have a take-home project and additional resources to get you to practice and reinforce skills learned during the workshop.

          ATTENDEES WILL BE ISSUED A CERTIFICATE ON COMPLETION OF THE TAKE-HOME POWER BI PROJECT. THIS SHOULD A DEDICATED WEEKEND OR A WEEK OR TWO FOR THOSE WORKING.

          Note that this is a paid masterclass and you'll be required to confirm your slot after registering a ticket here. Payment details will be on the email received on registration. Here are the prices:
          Early-Bird Tickets (Phase I): Ksh 1000/=
          Discounted Tickets (Phase II): Ksh 1500/=
          Regular Tickets (Phase III): Ksh 2000/=
          Students get 25% OFF on all ticket types
          Admission on entry (at the gate) will be Ksh 2500/="
          />
        </div>

        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            SYT Chapter
          </label>
          <select
            name="chapter"
            placeholder="SYT Chapter"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option value="Tanzania">SYT Tanzania</option>
            <option value="Nairobi">SYT Nairobi</option>
          </select>
        </div>

        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            Event Link
          </label>
          <input
            type="text"
            name="event-link"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Event Link"
            value="https://sample-link-to-the-event-location-or-virtual-link"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            Location
          </label>
          <select
            name="location"
            placeholder="Location"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option value="Sarit-center">Sarit center</option>
            <option value="Twitter">Twitter Spaces</option>
          </select>
        </div>

        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            Live Location Link
          </label>
          <input
            type="text"
            name="event-link"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Event Link"
            value="https://sample-link-to-the-event-live-location"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-[0.5rem] left-3 bg-white z-[1] px-1 text-xs">
            Select Date
          </label>
          <input
            type="date"
            name="event-date"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Select Date"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="relative w-full">
            <label className="absolute -top-[0.2rem] left-3 bg-white z-[1] px-1 text-xs">
              Start Time
            </label>
            <input
              type="time"
              name="start-time"
              className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Start Time"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-[0.2rem] left-3 bg-white z-[1] px-1 text-xs">
              End Time
            </label>
            <input
              type="time"
              name="end-time"
              className="mt-4 sm:mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="End Time"
            />
          </div>
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
        <div className="flex justify-evenly sm:justify-between">
          <button
            type="button"
            className="flex items-center text-red-500 hover:cursor-pointer"
          >
            <span className="sr-only">Delete</span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM6 2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5H6V2.75ZM15 18.5H3V5H15V18.5ZM7.5 8.75V14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75ZM12 8.75V14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75Z"
                fill="#FE0101"
              />
            </svg>{" "}
            Delete
          </button>

          <div className="flex justify-between sm:justify-end space-x-4">
            <a
              href="/admin/events"
              type="button"
              className="hover:bg-primary text-center text-[#7E8180] hover:text-white rounded-lg border hover:border-0 py-3 px-5 sm:px-8 w-full sm:w-52 border-[#7E8180] focus:outline-none"
            >
              Cancel
            </a>

            <a
              href="/admin/events/add-event"
              type="submit"
              className="bg-primary text-center text-white rounded-lg border-0 py-3 px-5 sm:px-8 w-full sm:w-52 hover:bg-white hover:border hover:border-[#009975] hover:text-primary focus:outline-none"
            >
              Update Event
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateEventPage;
