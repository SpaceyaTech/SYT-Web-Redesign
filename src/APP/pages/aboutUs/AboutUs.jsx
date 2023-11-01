import { useEffect } from "react";

import {
  HeroSection,
  LeadershipSection,
  MissionVisionSection,
  PartnerCTA,
} from "./sections";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
