import React from "react";
import { Link } from "react-router-dom";

import { iphone } from "../../../../assets/images/blogs-page";

function RelatedBlog() {
  return (
    <Link className="flex flex-row items-center gap-2 w-64" to="/blogs2">
      <img src={iphone} alt="" className="object-cover h-20 w-20" />

      <div className="flex flex-col">
        <h4 className="text-sm font-semibold line-clamp-2">
          iOS 18 is Apple’s answer to the Galaxy.
        </h4>
        <p className="text-xs font-medium text-[#323433] capitalize">
          Sharon Makena
        </p>
        <small className="text-xs text-[#656767]">10 Jan 2024</small>
      </div>
    </Link>
  );
}

export default RelatedBlog;
