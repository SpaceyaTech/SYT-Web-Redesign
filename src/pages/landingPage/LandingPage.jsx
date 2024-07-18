/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import LandingWrapper from "../../components/LandingWrapper";
import SeoMetadata from "../../components/SeoMetadata";
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
    <>
      <SeoMetadata
        title="Accelerating growth and potential of tech enthusiasts"
        description="SpaceYaTech is the fastest growing Africa, open-source community looking to change the way young Africans get started in technology."
        type="website"
        url="https://www.spaceyatech.com/"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
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
    </>
  );
}

export default LandingPage;
