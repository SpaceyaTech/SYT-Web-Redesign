import React from "react";
import { formatDistanceToNow } from "date-fns";
import logo from "../../../../assets/images/sytLogo.png";

import "./blogWrapper.css";

const BlogWrapper = ({ blog }) => {
  const timeAgo = formatDistanceToNow(new Date(blog.created_at), {
    addSuffix: true,
  });

  return (
    <div className="flex flex-row">
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex flex-col pt-2 gap-2">
          <h3 className="text-2xl leading-9 md:text-3xl md:leading-normal text-[#323433] font-normal">
            {blog.title}
          </h3>

          <div className="flex gap-[10px]">
            <img
              src={logo}
              alt="icon"
              className="w-10 h-10 object-cover rounded-full bg-gray-200 flex items-center justify-center p-1 rounded-full"
            />

            <div className="flex flex-col gap-1 text-sm">
              <h4 className="font-medium text-[#323433] capitalize">
                {blog.author}
              </h4>

              <span className="text-[#656767]">{timeAgo}</span>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-6 md:pt-8">
          <div
            className="container text-[13px] md:text-base font-normal text-[##323433]"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          >
            {/* {htmlParser(blog.body)} */}
          </div>
        </div>

        {/* <Comments /> */}
      </div>

      <div className="w-2/5 hidden md:inline-flex" />
    </div>
  );
};

export default BlogWrapper;
