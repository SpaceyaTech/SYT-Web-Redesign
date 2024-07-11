import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
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
    <>
      <SeoMetadata
        title="About Us"
        description="A community fostering innovation across African borders for tech enthusiasts with memberships across Kenya, Tanzania, Nigeria and pockets of Africa."
        type="website"
        url="https://www.spaceyatech.com/about-us"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <HeroSection />
        <MissionVisionSection />
        <LeadershipSection />
        <PartnerCTA />
      </div>
    </>
  );
}

export default AboutUs;
