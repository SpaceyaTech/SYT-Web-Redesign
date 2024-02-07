import { HeroSection, ResourcesSection, ResourcesButtons } from "./sections";

const Resources = () => {
  return (
    <div className="px-10 md:py-32 py-20 flex flex-col gap-8">
      <HeroSection />
      <ResourcesSection />
    </div>
  );
};

export default Resources;
