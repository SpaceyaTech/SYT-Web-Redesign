import { useEffect } from "react";
import EventsSection from "../events/sections/eventsSection/EventsSection";
import {
  WelcomeSection,
  ChaptersSection,
  PartnerSection,
  GallerySection,
} from "./sections";

function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <WelcomeSection />
      <EventsSection showAllEventsLink />
      {/* <ChaptersSection /> */}
      {/* <PartnerSection /> */}
      <GallerySection />
    </div>
  );
}

export default CommunityPage;
