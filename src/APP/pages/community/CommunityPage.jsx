import React from "react";
import WelcomeSection from "./sections/WelcomeSection";
import EventsSection from "../events/sections/eventsSection/EventsSection";
import ChaptersSection from "./sections/chaptersSection/ChaptersSection";
import PartnerSection from "./sections/partnerSection/PartnerSection";
import GallerySection from "./sections/gallerySection/GallerySection";

function CommunityPage() {
  return (
    <div className="w-screen flex flex-col">
      <WelcomeSection />
      <EventsSection showAllEventsLink />
      <ChaptersSection />
      <PartnerSection />
      <GallerySection />
    </div>
  );
}

export default CommunityPage;
