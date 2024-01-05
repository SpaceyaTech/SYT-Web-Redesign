import React from "react";

import { Banner, BlogsWrapper } from "./sections";

function Blogs() {
  return (
    <section className="flex flex-col items-center gap-4 max-w-[1440px] mx-auto">
      <Banner />
      <BlogsWrapper />
    </section>
  );
}

export default Blogs;
