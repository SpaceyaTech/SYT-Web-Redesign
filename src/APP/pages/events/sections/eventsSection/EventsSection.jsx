import React from 'react';
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

const events = [
  {
    img: MasterBase,
    title: 'How to Master Database Engineering using SQL',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
    id: 1,
  },
  {
    img: mentorlst,
    title: 'Deploying and Managing Applications with Kubernetes',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Sarit Centre • Nairobi ',
    mode: 'Physical',
    id: 2,
  },
  {
    img: mpesapayments,
    title: 'How to Integrate MPESA Payments into Your Website or App',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: '#SYTTechTalks',
    mode: 'virtual',
    id: 3,
  },
  {
    img: techrecruiters,
    title:
      'Insights and Advice from Tech Recruiters on Navigating the Job Market',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
    id: 4,
  },
  {
    img: uxhiringafrica,
    title: 'UX Hiring Africa: What Recruiters Look for When Hiring Designers',
    date: 'Sat, May 6, 2023 8:00 PM EAT',
    location: 'Twitter Spaces',
    mode: 'virtual',
    id: 5,
  },
];
function EventsSection({showTabs, showAllEventsLink}) {
  return (
    <div className="p-6">
      <EventsUpdateSection showAllEventsLink={showAllEventsLink} />
      {showTabs && <EventsTab />}
      <Events events={events} isVertical={false} />
    </div>
  );
}

EventsSection.defaultProps = {
  showTabs: false,
  showAllEventsLink: false
}

export default EventsSection;
