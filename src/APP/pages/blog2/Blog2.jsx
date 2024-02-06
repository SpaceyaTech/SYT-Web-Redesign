import React from "react";

import { Advert, BlogHeader, BlogBody, NextRead } from "./sections";

function Blog2() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <Advert />
      <BlogHeader />
      <BlogBody />
      <NextRead />
    </div>
  );
}

export default Blog2;
