import React from "react";
import { Ellipse30 } from "../../../../assets/images/blogs-page";
import { blogData } from "../data";
import Comments from "./Comments";

const BlogWrapper = () => {
  const paragraph = blogData.split("\n\n");
  return (
    <div className="flex flex-row">
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex flex-col pt-2 gap-2">
          <h3 className="text-2xl leading-9 md:text-3xl md:leading-normal text-[#323433] font-normal">
            The Future of Virtual Reality in Education
          </h3>

          <div className="flex gap-[10px]">
            <img
              src={Ellipse30}
              alt="icon"
              className="w-10 h-10 object-cover rounded-full"
            />

            <div className="flex flex-col gap-1 text-sm">
              <h4 className=" font-medium text-[#323433]">Sharon Makena</h4>

              <span className="text-[#656767]">3 days ago</span>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-6 md:pt-8">
          <p className="text-[13px] md:text-base font-normal text-[##323433]">
            {paragraph.map((par, i) => (
              <React.Fragment key={i}>
                {par}
                <br />
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        <Comments />
      </div>

      <div className="w-2/5 hidden md:inline-flex" />
    </div>
  );
};

export default BlogWrapper;
