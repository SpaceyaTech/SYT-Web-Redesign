/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";

import LandingWrapper from "../../components/LandingWrapper";
import {
  CTASection,
  FaqSection,
  FeatureSection,
  HeroSection,
  OurEvents,
  Partners,
  StatsSection,
  TestimonialSection,
  WhatWeDo,
} from "./sections";
import ScrollToTop from "@/utilities/ScrollToTop";
import HeroSection3 from "./sections/HeroSection3";

const components = [
  {
    title: "what we do",
    component: <WhatWeDo />,
  },
  {
    title: "our events",
    component: <OurEvents />,
  },
  {
    title: "our impact",
    component: <StatsSection />,
  },
  {
    title: "testimonials",
    component: <TestimonialSection />,
  },
  {
    title: "faq",
    component: <FaqSection />,
  },
];

function LandingPage() {
  return (
    <div className="w-screen bg-landingPageBg bg-gray-100">
      <ScrollToTop />
      <HeroSection />
      <Partners />
      <FeatureSection />
      {components.map(({ component, title }) => (
        <LandingWrapper key={title} title={title}>
          {component}
        </LandingWrapper>
      ))}
      <div className="p-2 pb-10 md:p-8 md:pb-20">
        <CTASection />
      </div>
    </div>
  );
}

export default LandingPage;
