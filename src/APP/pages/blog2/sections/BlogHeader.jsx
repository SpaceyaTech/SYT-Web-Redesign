import React from "react";

import { Ellipse30, blog1 } from "../../../../assets/images/blogs-page";
import BlogStats from "../../blogs/sections/BlogStats";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../../../../assets/images/socials";

function BlogHeader() {
  return (
    <div className="flex flex-col">
      <div className="md:w-[864px] px-3 ">
        <h1 className="py-3 text-2xl md:text-4xl font-bold leading-normal text-center md:text-left">
          Kenya is protecting its forests and reparian lands using modern drone
          technology
        </h1>

        <p className="text-base md:text-lg leading-normal text-center md:text-left">
          The Kenyan ministry of forestry partnered with OneAgric, an IoT firm
          that specializes in aerial mapping using drone technology, to map our
          public forests and protect gazetted riparian lands from encroachment
        </p>

        <div className="flex items-center gap-2 mt-5 md:my-3">
          <img
            src={Ellipse30}
            alt="ellipse"
            className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
          />

          <span className="text-sm md:text-base font-medium text-[#323433] capitalize">
            Sharon Makena
          </span>

          <small className="text-[#656767] text-xs">3 days ago</small>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-5">
        <img
          src={blog1}
          alt="blog1"
          className="object-cover w-full md:h-[320px] md:rounded-xl  px-4"
        />

        <div className="flex flex-row items-center justify-between px-3 ">
          <div className="flex flex-row items-center gap-3">
            <button type="button" onClick={() => {}}>
              <img src={facebook} alt="facebook" className="" />
            </button>

            <button type="button" onClick={() => {}}>
              <img src={instagram} alt="instagram" className="" />
            </button>

            <button type="button" onClick={() => {}}>
              <img src={twitter} alt="twitter" className="" />
            </button>

            <button type="button" onClick={() => {}}>
              <img src={linkedin} alt="linkedin" className="" />
            </button>
          </div>

          <BlogStats likes={12} blogId={1} />
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
