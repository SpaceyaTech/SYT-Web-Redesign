import SeoMetadata from "../../components/SeoMetadata";
import { HeroSection, ResourcesSection } from "./sections";

// million-ignore
const Resources = () => {
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
      <div className="px-4 md:px-10 md:pt-40 md:pb-8 pt-20 pb-6 flex flex-col gap-8 max-w-[1440px] mx-auto">
        <HeroSection />
        <ResourcesSection />
      </div>
    </>
  );
};

export default Resources;
