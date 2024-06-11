import React from "react";

import SeoMetadata from "../../components/SeoMetadata";
import { Banner, BlogsWrapper } from "./sections";

function Blogs() {
  return (
    <>
      <SeoMetadata
        title="Blog"
        description="SpaceYaTech Blog home page"
        type="website"
        url="https://www.spaceyatech.com/blogs"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
        siteName="SpaceYaTech Blog"
      />
      <section className="flex flex-col items-center gap-4 max-w-[1440px] mx-auto">
        <Banner />
        <BlogsWrapper />
      </section>
    </>
  );
}

export default Blogs;
