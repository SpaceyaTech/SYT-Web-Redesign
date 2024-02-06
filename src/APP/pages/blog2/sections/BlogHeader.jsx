import React from "react";

import { Ellipse30 } from "../../../../assets/images/blogs-page";

function BlogHeader() {
  return (
    <div className="flex flex-col">
      <div className="w-[864px]">
        <h1 className="py-3 text-4xl font-bold leading-normal">
          Kenya is protecting its forests and reparian lands using modern drone
          technology
        </h1>

        <p className="text-lg leading-normal">
          The Kenyan ministry of forestry partnered with OneAgric, an IoT firm
          that specializes in aerial mapping using drone technology, to map our
          public forests and protect gazetted riparian lands from encroachment
        </p>

        <div className="flex items-center gap-2 my-3">
          <img
            src={Ellipse30}
            alt="ellipse"
            className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
          />

          <span className="font-medium text-[#323433] capitalize">
            Sharon Makena
          </span>

          <small className="text-[#656767] text-xs">September 14, 2023</small>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
