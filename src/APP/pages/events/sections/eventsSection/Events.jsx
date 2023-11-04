import { parse, format } from 'date-fns';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Events({ events, isVertical }) {
  // const navigate = useNavigate();

  // box-shadow: 0px 4px 10px 0px #04080D0D;
  const verticalContainer = 'mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8';
  const horizontalContainer = 'flex overflow-auto';

  const verticalWrapper = 'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto';
  const horizontalWrapper = 'mr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700';
  return (
    <div className={isVertical ? verticalContainer : horizontalContainer}>
      { events && Array.isArray(events) ? (
        events.map(({
          id, name, date, location, mode, category, poster, city, start_time
        }) => {
          const buttonColor = mode === 'Virtual'
            ? 'bg-red-800 hover:bg-red-800'
            : 'bg-blue-800 hover:bg-blue-800';
          return (
            <div
              key={id}
              className={isVertical ? verticalWrapper : horizontalWrapper}
              style={{ boxShadow: "0px 4px 10px 0px #04080D0D" }}
            >
              <Link to={`/events/${id}`}>
              <img className="rounded-t-lg w-full" src={poster} alt="" />
              </Link>
              <div className="p-5">
                <Link to={`/events/${id}`}>
                  <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-40 whitespace-nowrap">
                  {format(new Date(date), 'EEE, MMM d, yyyy')} {format(parse(start_time, 'HH:mm:ss', new Date()), 'h:mm a')} EAT
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {location} {mode.toLowerCase()==="physical" && <> • {city}</>}
                </p>
                  <Link to={`/events/${id}`}>
                  <button
                    type="button"
                    className={`text-white ${buttonColor} focus:outline-none focus:ring-4 focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                  >
                    {mode}
                  </button>
                </Link>
                
  
              </div>
            </div>
          );
        })
      ) : ''}
    </div>
  );
}

Events.defaultProps = {
  isVertical: true,
}

export default Events;
