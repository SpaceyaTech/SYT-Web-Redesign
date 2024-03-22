import React from "react";

import ScrollToTop from "../../../utilities/ScrollToTop";
import {
  CTASection,
  FaqSection,
  FeatureSection,
  HeroSection,
  PodcastSection,
  Services,
  StatsSection,
  TestimonialSection,
} from "./sections";

function LandingPage() {
  return (
    <div className="w-screen bg-landingPageBg">
      <ScrollToTop />
      <HeroSection />
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
