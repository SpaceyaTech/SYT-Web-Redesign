import { HeroSection, ResourcesSection } from "./sections";

// million-ignore
const Resources = () => {
  return (
    <div className="px-4 md:px-10 md:pt-40 md:pb-8 pt-20 pb-6 flex flex-col gap-8 max-w-[1440px] mx-auto">
      <HeroSection />
      <ResourcesSection />
    </div>
  );
};

export default Resources;
