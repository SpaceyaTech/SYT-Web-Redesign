import React from 'react';


function Events({events}) {
  

  // box-shadow: 0px 4px 10px 0px #04080D0D;
  return (
    <div className=" mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
      {events.map(({
        img, title, date, location, mode
      }) => {
        const buttonColor = mode === 'virtual'
          ? 'bg-red-800 hover:bg-red-800'
          : 'bg-blue-800 hover:bg-blue-800';
        return (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ 'box-shadow': '0px 4px 10px 0px #04080D0D' }}
          >
            <a href="#">
              <img className="rounded-t-lg w-full" src={img} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {date}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {location}
              </p>
              <button
                type="button"
                className={`text-white ${buttonColor} focus:outline-none focus:ring-4 focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2`}
              >
                {mode}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
