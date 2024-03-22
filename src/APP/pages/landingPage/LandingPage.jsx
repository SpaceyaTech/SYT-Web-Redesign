import React from "react";

import ScrollToTop from "../../../utilities/ScrollToTop";
import {
  CTASection,
  FaqSection,
  FeatureSection,
  HeroSection,
  Partners,
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
      <Partners />
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
