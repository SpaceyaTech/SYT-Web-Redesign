import { HeroSection, ResourcesSection } from "./sections";

const Resources = () => {
  return (
    <div className="px-4 md:px-10 md:py-32 pt-20 pb-6 flex flex-col gap-8">
      <HeroSection />
      <ResourcesSection />
    </div>
  );
};

export default Resources;
