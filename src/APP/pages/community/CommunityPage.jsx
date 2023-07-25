import React from 'react';
import WelcomeSection from './sections/WelcomeSection';
import EventsSection from './sections/eventsSection/EventsSection';
import ChaptersSection from './sections/chaptersSection/ChaptersSection';
import PartnerSection from './sections/partnerSection/PartnerSection';

function CommunityPage() {
  return (
    <div>
      <WelcomeSection />
      <EventsSection />
      <ChaptersSection />
      <PartnerSection />
    </div>
  );
}

export default CommunityPage;
