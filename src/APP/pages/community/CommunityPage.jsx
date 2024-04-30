import { useEffect } from "react";
import EventsSection from "../events/sections/eventsSection/EventsSection";
import { WelcomeSection, GallerySection } from "./sections";

function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#d9d9d9]/30 ">
      <div className="max-w-[1440px] mx-auto">
        <WelcomeSection />
        <EventsSection showAllEventsLink />
        <GallerySection />
      </div>
    </section>
  );
}

export default CommunityPage;
