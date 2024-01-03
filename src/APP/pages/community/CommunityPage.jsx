import React, { useEffect } from "react";
import {
  WelcomeSection,
  ChaptersSection,
  PartnerSection,
  GallerySection,
} from "./sections";
import EventsSection from "../events/sections/eventsSection/EventsSection";

function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen max-w-[1440px] mx-auto flex flex-col">
      <WelcomeSection />
      <EventsSection showAllEventsLink />
      <ChaptersSection />
      <PartnerSection />
      <GallerySection />
    </div>
  );
}

export default CommunityPage;
