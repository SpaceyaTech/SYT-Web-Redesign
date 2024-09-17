import { LandingWrapper } from "../../components";
import SeoMetadata from "../../components/SeoMetadata";
import { TestimonialSection } from "../landingPage/sections";
import {
  FAQSection,
  Features,
  HeroSection,
  Stats,
  StudentShowcase,
  WhatWeOffer,
} from "./sections";

const components = [
  {
    title: "our impact",
    component: <Stats />,
  },
  {
    title: "student showcase",
    component: <StudentShowcase />,
  },
  {
    title: "faq",
    component: <FAQSection />,
  },
  {
    title: "testimonials",
    component: <TestimonialSection />,
  },
];

function Resources() {
  return (
    <>
      <SeoMetadata
        title="Mastercraft"
        description="Discover tech tools and resources to boost your productivity."
        type="article"
        url="https://www.spaceyatech.com/resources"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <main className="bg-[#F5F5F5]">
        <HeroSection />
        <Features />
        <WhatWeOffer />
        {components.map(({ component, title }) => (
          <LandingWrapper key={title} title={title}>
            {component}
          </LandingWrapper>
        ))}
      </main>
    </>
  );
}

export default Resources;
