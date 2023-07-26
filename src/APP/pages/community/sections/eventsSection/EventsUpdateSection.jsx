import React from 'react'
// bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 grid-cols-1 gap-x-33 gap-y-10 inline-flex
function EventsUpdateSection() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap flex-col md:flex-row md:items-center">
        <h2 className="text-lg font-light text-[#323433]">Upcoming events near</h2>
        <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-blue-700 underline font-medium text-s px-2 py-2.5 text-center inline-flex items-center transition duration-150 ease-in-out" type="button">
          Nairobi
          {' '}
          <svg className=" h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 ">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
      </div>

      <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 relative" data-te-dropdown-ref>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton" data-te-dropdown-menu-ref>
          <li>
            <a href="#" data-te-dropdown-item-ref className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" data-te-dropdown-item-ref className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" data-te-dropdown-item-ref className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
        </ul>
        <div className="py-2">
          <a href="#" data-te-dropdown-item-ref className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
        </div>
      </div>

    </div>

  )
}

export default EventsUpdateSection
