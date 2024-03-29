import React, { useEffect, useState } from "react";

import { useAllCities } from "../../../../../hooks/Queries/eventsSection/useEventCategories";
import useTopEvents from "../../../../../hooks/Queries/eventsSection/useTopEvents";
import { Loader } from "../../../../components";
import Error500 from "../../../errorPages/Error500";
import Events from "./Events";
import EventsTab from "./EventsTab";
import EventsUpdateSection from "./EventsUpdateSection";

function EventsSection({ showTabs, showAllEventsLink }) {
  const [filters, setFilters] = useState({});

  const {
    data: topEventsData,
    isPending: isLoadingTopEvents,
    isError: isErrorTopEvents,
    isSuccess: isSuccessTopEvents,
    refetch: refetchTopEvents,
  } = useTopEvents(filters);

  const {
    data: topEventsCities,
    isPending,
    isError,
    isSuccess,
  } = useAllCities();

  // To update the filters from the EventsUpdateSection sub-component
  const updateCityFilter = (city) => {
    setFilters((prevState) => ({ ...prevState, city }));
  };

  // To update the recent filters from the EventsTab sub-component
  const updateRecentFilter = (dateFilterString) => {
    setFilters((prevState) => ({
      ...prevState,
      start_date: dateFilterString,
    }));
  };

  useEffect(() => {
    refetchTopEvents();
  }, [filters]);

  return (
    <div className="p-2 md:p-6">
      {isErrorTopEvents && <p>Error loading cities!</p>}
      {isLoadingTopEvents && <p className="text-primary">Loading cities...</p>}
      {isSuccessTopEvents && (
        <EventsUpdateSection
          cityFilter={filters}
          topEventsCities={topEventsCities}
          updateCityFilter={updateCityFilter}
          showAllEventsLink={showAllEventsLink}
        />
      )}

      {showTabs && <EventsTab updateRecentFilter={updateRecentFilter} />}

      {isError && <Error500 />}
      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading events...</p>
        </div>
      )}
      {isSuccess && (
        <>
          {topEventsData?.count === 0 ? (
            <p>No events found!</p>
          ) : (
            <Events events={topEventsData?.results} isVertical={false} />
          )}
        </>
      )}
    </div>
  );
}

EventsSection.defaultProps = {
  showTabs: false,
  showAllEventsLink: false,
};

export default EventsSection;
