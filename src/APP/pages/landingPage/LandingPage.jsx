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

import ScrollToTop from "../../../utilities/ScrollToTop";

function LandingPage() {
  return (
    <div className="text-blue">
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
