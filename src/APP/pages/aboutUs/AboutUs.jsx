import Header2 from "../../components/Header2";
import HeroSection from "./sections/HeroSection";
import LeadershipSection from "./sections/LeadershipSection";
import MissionVisionSection from "./sections/MissionVisionSection";
import PartnerCTA from "./sections/PartnerCTA";
import Footer2 from "../../components/Footer2";

function AboutUs() {
  return (
    <div className="text-[#323433]">
      <HeroSection />
      <MissionVisionSection />
      <LeadershipSection />
      <PartnerCTA />
    </div>
  );
}

export default AboutUs;