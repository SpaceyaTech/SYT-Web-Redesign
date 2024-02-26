import React from "react";

import { blog1 } from "../../../../assets/images/blogs-page";
import BlogStats from "../../blogs/sections/BlogStats";

function BlogUMightLike() {
  return (
    <div className="flex flex-col border border-green-500 min-w-full snap-center">
      <img src={blog1} alt="" className="h-1/2 w-full" />

      <div className="h-1/2">
        <div className="flex items-center justify-between">
          <h3 className="">The Future of Virtual Reality in Education</h3>

          <BlogStats likes={24} blogId={15} />
        </div>
      </div>
    </div>
  );
}

export default BlogUMightLike;
