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

function EventsSection({showTabs, showAllEventsLink}) {
  const [filters, setFilters] = useState({});
  const { data: topEventsData, status } = useQuery("topevents", () => fetchEventData(filters));

  return (
    <>
    {status === "error" && <p>Error!</p>}
    {status === "loading" && <p>Loading...</p>}
    {status === "success" && (
      <div className="p-6">
      <EventsUpdateSection showAllEventsLink={showAllEventsLink} />
      {showTabs && <EventsTab />}
      <Events events={topEventsData.results} isVertical={false} />
    </div>
    )};
    </>
  );
}

EventsSection.defaultProps = {
  showTabs: false,
  showAllEventsLink: false
}

export default EventsSection;
