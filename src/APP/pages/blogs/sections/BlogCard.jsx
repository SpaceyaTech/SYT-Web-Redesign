/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import logo from "../../../../assets/images/sytLogo.png";
import BlogStats from "./BlogStats";

function BlogCard({ blog }) {
  const timeAgo = blog?.created_at;
  formatDistanceToNow(new Date(blog?.created_at), {
    addSuffix: true,
  });

  return (
    <Link
      to={`/blogs/${blog.title_slug}`}
      className="flex flex-col items-start w-full mb-5"
    >
      <LazyLoadImage
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-lg asp"
      />

      <div className="py-[6px] flex flex-col gap-[10px] w-full mt-2">
        <h3 className="text-xl text-[#323433] font-semibold">{blog.title}</h3>

        <p className="text-base font-normal leading-6 text-[#4C4D4D] line-clamp-3">
          {blog.description}
        </p>

        <div className="flex flex-row items-start justify-between">
          <div className="flex gap-[10px]">
            <LazyLoadImage
              src={logo}
              alt="icon"
              className="w-10 h-10 object-cover bg-gray-200 flex items-center justify-center p-1 rounded-full"
            />

            <div className="flex flex-col gap-1 text-sm">
              <h4 className="capitalize font-medium text-[#323433]">
                {blog.author}
              </h4>
              <span className="text-[#656767]">{timeAgo}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
            <BlogStats likes={blog.likes <= 1 ? "" : blog.likes} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
