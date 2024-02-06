import {
  HeroSection,
  ResourcesSection,
  ResourcesInput,
  ResourcesButtons,
} from "./sections";

const Resources = () => {
  return (
    <div className="px-10 md:py-32 py-20 flex flex-col gap-8">
      <HeroSection />
      <ResourcesInput />
      <ResourcesButtons />
      <ResourcesSection />
    </div>
  );
};

export default Resources;
