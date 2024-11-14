import { LandingWrapper } from "../../components";
import SeoMetadata from "../../components/SeoMetadata";
import {
  FAQSection,
  Features,
  HeroSection,
  Archives,
  StudentShowcase,
  HowToArticles,
} from "./sections";

const components = [
  {
    title: "spaceyatech archives",
    component: <Archives />,
    bgColored: true,
  },
  {
    title: "student showcase",
    component: <StudentShowcase />,
    bgColored: false,
  },
  {
    title: "faq",
    component: <FAQSection />,
    bgColored: false,
  },
];

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
        <HowToArticles />
        {components.map(({ bgColored, component, title }) => (
          <LandingWrapper key={title} title={title} bgColored={bgColored}>
            {component}
          </LandingWrapper>
        ))}
      </main>
    </>
  );
}

export default Resources;
