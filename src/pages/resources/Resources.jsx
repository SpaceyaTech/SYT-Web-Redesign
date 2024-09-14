import SeoMetadata from "../../components/SeoMetadata";
import { Features, HeroSection } from "./sections";

function Resources() {
  return (
    <>
      <SeoMetadata
        title="Resources"
        description="Discover tech tools and resources to boost your productivity."
        type="article"
        url="https://www.spaceyatech.com/resources"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <main className="bg-[#F5F5F5]">
        <HeroSection />
        <Features />
      </main>
    </>
  );
}

export default Resources;
