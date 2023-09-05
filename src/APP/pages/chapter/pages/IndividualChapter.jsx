import React from 'react'
import WelcomeSection from '../sections/WelcomeSection';
import AboutChapterSection from '../sections/AboutChapterSection';
import UpcomingEventSection from '../sections/UpcomingEventSection';
import ImpactSection from '../sections/ImpactSection';
import OrganizersSection from '../sections/OrganizersSection';


function IndividualChapter() {
  // content-between md:px-20

  return (
    <div>
      <WelcomeSection />
      <AboutChapterSection />
      <UpcomingEventSection />
      <ImpactSection />
      <OrganizersSection />
    </div>

  )
}

export default IndividualChapter;
