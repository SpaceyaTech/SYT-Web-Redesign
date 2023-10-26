import {
  CTASection,
  FaqSection,
  FeatureSection,
  HeroSection2,
  PodcastSection,
  Services,
  StatsSection,
  TestimonialSection,
} from "./sections";

function LandingPage() {
  return (
    <div className="text-blue">
      {/* <Header /> */}
      {/* <Header2 /> */}
      <HeroSection2 />
      {/* <HeroSection /> */}
      <FeatureSection />
      <Services />
      <StatsSection />
      <PodcastSection />
      <TestimonialSection />
      <FaqSection />
      <CTASection />
      {/* <Footer2 /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
