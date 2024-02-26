/* eslint-disable react/prop-types */
import React from "react";

import { glovo } from "../../../../assets/images/blogs-page";

import RelatedBlog from "./RelatedBlog";
import NextRead from "./NextRead";

import "./blogBody.css";

function BlogBody({ id, categoryId, blogBody }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full pb-8 px-3">
      <div className="w-full md:w-[70%] flex flex-col gap-5">
        <div className="container text-[13px] md:text-base font-normal text-[#323433]">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogBody }}
          />

          {/* <Advert /> */}
        </div>
        {/* read next */}
        <NextRead />
      </div>

      <div className="w-full md:w-[30%] flex flex-col pt-20 gap-10 md:gap-64">
        <RelatedBlog blogId={id} categoryId={categoryId} />

        <div className="hidden md:flex">
          <img
            src={glovo}
            alt="glovo"
            className="object-cover w-full aspect-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogBody;
