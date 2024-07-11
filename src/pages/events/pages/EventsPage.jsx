import React from "react";

import { GoBackBtn } from "../../../components";
import SeoMetadata from "../../../components/SeoMetadata";
import { EventsSection, FeaturedCarousel } from "../sections";

function EventsPage() {
  return (
    <>
      <SeoMetadata
        title="Upcoming Events"
        description="Upcoming tech events powered by SpaceYaTech."
        type="website"
        url="https://www.spaceyatech.com/events"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <section className="px-2 md:px-0 py-4 md:py-10 bg-gray-100">
        <div className="max-w-1216 mx-auto flex flex-col gap-3 md:gap-6 w-full md:p-3">
          <GoBackBtn />
          <FeaturedCarousel />

          <EventsSection />
        </div>
      </section>
    </>
  );
}

export default EventsPage;
