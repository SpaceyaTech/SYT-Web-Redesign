import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import EventsSection from "../events/sections/eventsSection/EventsSection";
import { WelcomeSection, GallerySection } from "./sections";

function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoMetadata
        title="Community"
        description="SpaceYaTech is a dynamic tech community fostering career growth for young professionals across all tech sectors, offering networking and learning opportunities for all career stages."
        type="website"
        url="https://www.spaceyatech.com/community"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <section className="bg-[#d9d9d9]/30 ">
        <div className="max-w-[1440px] mx-auto">
          <WelcomeSection />
          <EventsSection showAllEventsLink />
          <GallerySection />
        </div>
      </section>
    </>
  );
}

export default CommunityPage;
