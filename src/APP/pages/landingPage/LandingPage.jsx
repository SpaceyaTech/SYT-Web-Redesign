import React from "react";

import {
  CTASection,
  FaqSection,
  FeatureSection,
  HeroSection3,
  PodcastSection,
  Services,
  StatsSection,
  TestimonialSection,
} from "./sections";

import ScrollToTop from "../../../utilities/ScrollToTop";

function LandingPage() {
  return (
    <div className="w-screen">
      <ScrollToTop />
      <HeroSection3 />
      <FeatureSection />
      <Services />
      <PodcastSection />
      <StatsSection />
      <TestimonialSection />
      <FaqSection />
      <CTASection />
    </div>
  );
}

export default LandingPage;
