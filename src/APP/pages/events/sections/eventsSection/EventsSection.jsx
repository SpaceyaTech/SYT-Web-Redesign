import React, { useEffect, useState } from 'react';
import EventsUpdateSection from './EventsUpdateSection';
import EventsTab from './EventsTab'
import Events from './Events';
// import {
//   community,
//   MasterBase,
//   mpesapayments,
//   techrecruiters,
//   mentorlst,
//   uxhiringafrica,
// } from '../../../../../assets/images/community';
import { fetchEventData } from '../../../community/sections/eventsSection/data';
import { useQuery } from 'react-query';
import { fetchCities } from '../../pages/data';

function EventsSection({showTabs, showAllEventsLink}) {
  const [filters, setFilters] = useState({});
  const { data: topEventsData, status: statusTopEvents, refetch: refetchTopEvents } = useQuery("topevents", () => fetchEventData(filters));
  const { data: topEventsCities, status: statusTopCities } = useQuery("topcities", () => fetchCities());

  // To update the filters from the EventsUpdateSection sub-component
  const updateCityFilter = (city) => {
    setFilters((prevState) => { 
      return {...prevState, city:city } 
    });
  }

  // To update the recent filters from the EventsTab sub-component
  const updateRecentFilter = (dateFilterString) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        date:dateFilterString
      }
    });
  }

  useEffect(() => { refetchTopEvents() }, [filters]);
  
  return (
    <>
    <div className="p-6">
    {statusTopCities === "error" && <p>Error loading cities!</p>}
    {statusTopCities === "loading" && <p>Loading cities...</p>}
    {statusTopCities === "success" && (
      <EventsUpdateSection cityFilter={filters} topEventsCities={topEventsCities} updateCityFilter={updateCityFilter} showAllEventsLink={showAllEventsLink} />
    )}

    {showTabs && <EventsTab updateRecentFilter={updateRecentFilter} />}

    {statusTopEvents === "error" && <p>Error loading top events!</p>}
    {statusTopEvents === "loading" && <p>Loading top events...</p>}
    {statusTopEvents === "success" && (
      <>
      {
      topEventsData.count === 0 ? (
        <p>No events found!</p>
      ) : (
        <Events events={topEventsData.results} isVertical={false} />
      )}
      </>
    )}
    </div>
    </>
  );
}

EventsSection.defaultProps = {
  showTabs: false,
  showAllEventsLink: false
}

export default EventsSection;
