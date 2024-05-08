import React from "react";

import { GoBackBtn } from "../../../components";
import { EventsSection, FeaturedCarousel } from "../sections";

function EventsPage() {
  return (
    <section className="px-2 md:px-0 py-4 md:py-10 bg-gray-100">
      <div className="max-w-1216 mx-auto flex flex-col gap-3 md:gap-6 w-full md:p-3">
        <GoBackBtn />

        <FeaturedCarousel />

        <EventsSection />
      </div>
    </section>
  );
}

export default EventsPage;
