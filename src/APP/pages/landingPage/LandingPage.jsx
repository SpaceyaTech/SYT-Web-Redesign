import React from "react";

import ScrollToTop from "@/utilities/ScrollToTop";
import LandingWrapper from "../../components/LandingWrapper";
import {
  CTASection,
  FaqSection,
  FeatureSection,
  HeroSection,
  OurEvents,
  Partners,
  PodcastSection,
  Services,
  StatsSection,
  TestimonialSection,
  WhatWeDo,
} from "./sections";

function LandingPage() {
  return (
    <div className="w-screen bg-landingPageBg bg-gray-100">
      <ScrollToTop />
      <HeroSection />
      <Partners />
      <FeatureSection />
      <LandingWrapper title="what we do">
        <WhatWeDo />
      </LandingWrapper>
      <LandingWrapper title="our events">
        <OurEvents />
      </LandingWrapper>
      <LandingWrapper title="our impact">
        <StatsSection />
      </LandingWrapper>

      <LandingWrapper title="testimonials">
        <TestimonialSection />
      </LandingWrapper>

      <LandingWrapper title="faq">
        <FaqSection />
      </LandingWrapper>

      <Services />
      <PodcastSection />
      <CTASection />
    </div>
  );
}

export default LandingPage;
