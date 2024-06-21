/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { glovo } from "../../../assets/images/blogs-page";

import NextRead from "./NextRead";
import RelatedBlogs from "./RelatedBlogs";

import "./blogBody.css";

function BlogBody({ id, categoryId, blogBody }) {
  const BodyRef = useRef(null);

  useEffect(() => {
    if (BodyRef.current) {
      BodyRef.current.innerHTML = blogBody ?? "";
    }
  }, [blogBody]);

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full pb-8 px-3">
      <div className="w-full md:w-[70%] flex flex-col gap-5">
        <div className="container text-[13px] md:text-base font-normal text-[#323433]">
          <div ref={BodyRef} className="blog-content" />

          {/* <Advert /> */}
        </div>
        {/* read next */}

        <div className="flex md:hidden">
          <RelatedBlogs blogId={id} categoryId={categoryId} />
        </div>
        <NextRead />
      </div>

      <div className="w-full md:w-[30%] hidden md:flex flex-col pt-20 gap-10 md:gap-64">
        <RelatedBlogs blogId={id} categoryId={categoryId} />

        <div className="w-full cursor-pointer">
          <LazyLoadImage
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
