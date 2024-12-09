import React from "react";

import SeoMetadata from "../../components/SeoMetadata";
import Content from "./sections/Content";
import Hero from "./sections/Hero";
import SimilarResources from "./sections/SimilarResources";

function Resource() {
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
      <main className="bg-[#F5F5F5] max-w-1440 mx-auto md:px-10 px-5 py-4 md:py-8 flex flex-col gap-12 md:gap-16 lg:gap-20">
        <Hero />
        <Content />
        <SimilarResources />
      </main>
    </>
  );
}

export default Resource;
