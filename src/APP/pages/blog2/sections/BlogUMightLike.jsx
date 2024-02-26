import React from "react";

import { Ellipse30, blog1 } from "../../../../assets/images/blogs-page";
import BlogStats from "../../blogs/sections/BlogStats";

function BlogUMightLike() {
  return (
    <div className="flex flex-col min-w-full snap-center">
      <img
        src={blog1}
        alt=""
        className="h-48 w-full object-cover aspect-video rounded-lg"
      />

      <div className="h-1/2 flex flex-col gap-2 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-[#323433] font-semibold">
            The Future of Virtual Reality in Education
          </h3>

          <BlogStats likes={24} blogId={15} />
        </div>

        <p className="text-sm font-normal leading-6 text-[#4C4D4D] line-clamp-2">
          This article delves into the potential of virtual reality to
          revolutionize education, making learning more immersive and engaging
          for students....
        </p>

        <div className="flex items-center gap-3 mt-5 md:my-3">
          <img
            src={Ellipse30}
            alt="ellipse"
            className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
          />

          <div className="flex flex-col">
            <span className="text-sm md:text-base font-medium text-[#323433] capitalize">
              Sharon Makena
            </span>

            <small className="text-[#656767] text-xs">3 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogUMightLike;
