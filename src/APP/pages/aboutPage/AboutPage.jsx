import Header2 from "../../components/Header2";
import HeroSection from "./sections/HeroSection";
import LeadershipSection from "./sections/LeadershipSection";
import MissionVisionSection from "./sections/MissionVisionSection";
import CreativeTeamSection from "./sections/CreativeTeamSection";
import Footer2 from "../../components/Footer2";

function About() {
  return (
    <div className="text-[#323433]">
      <Header2 />
      <HeroSection />
      <MissionVisionSection />
      <LeadershipSection />
      <CreativeTeamSection />
      <Footer2/>
    </div>
  );
}

export default About;
