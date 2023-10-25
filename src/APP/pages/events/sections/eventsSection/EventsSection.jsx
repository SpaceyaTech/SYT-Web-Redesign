import React, { useEffect, useState } from 'react';
import EventsUpdateSection from './EventsUpdateSection';
import EventsTab from './EventsTab'
import Events from './Events';
import {
  community,
  MasterBase,
  mpesapayments,
  techrecruiters,
  mentorlst,
  uxhiringafrica,
} from '../../../../../assets/images/community';
import { fetchEventData } from '../../../community/sections/eventsSection/data';

function EventsSection({showTabs, showAllEventsLink}) {
  const [topEventsData, setTopEventsData] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect (()=> {
    const fetchData = async () => {
      try {
        const theData = await fetchEventData(filters);
        setTopEventsData((prevState) => {
          return prevState = theData;
        });
      } catch(error) {
        // Handle error
        console.error("Error fetching top events: ", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="p-6">
      <EventsUpdateSection showAllEventsLink={showAllEventsLink} />
      {showTabs && <EventsTab />}
      {topEventsData ? (
        <Events events={topEventsData.results} isVertical={false} />
      ) : (
        <div>Loading Recent Events...</div>
      )}
    </div>
  );
}

EventsSection.defaultProps = {
  showTabs: false,
  showAllEventsLink: false
}

export default EventsSection;
