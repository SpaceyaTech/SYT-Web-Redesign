import Header2 from "../../components/Header2";
import HeroSection from "./sections/HeroSection";
import LeadershipSection from "./sections/LeadershipSection";
import MissionVisionSection from "./sections/MissionVisionSection";

function About() {
  return (
    <div className="text-[#323433]">
      <Header2 />
      <HeroSection/>
      <MissionVisionSection/>
      <LeadershipSection/>
      {/* <Footer /> */}
    </div>
  )
}

export default About;
