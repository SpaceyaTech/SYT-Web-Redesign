// import Footer from "../../components/Footer";
import Footer2 from "../../components/Footer2";
import Header from "../../components/Header";
import CTASection from "./sections/CTASection";
import FaqSection from "./sections/FaqSection";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";
import StatsSection from "./sections/StatsSection";
import TestimonialSection from "./sections/TestimonialSection";

function LandingPage() {
  return (
    <div className="text-blue">
      <Header />
      <HeroSection />
      <FeatureSection />
      <Services />
      <StatsSection />
      <TestimonialSection />
      <FaqSection />
      <CTASection />
      <Footer2 />
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
