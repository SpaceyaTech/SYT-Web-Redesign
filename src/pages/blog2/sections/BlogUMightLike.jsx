/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/sytLogo.png";
import BlogStats from "../../blogs/sections/BlogStats";

function BlogUMightLike({ blog, block }) {
  const timeAgo = formatDistanceToNow(new Date(blog.created_at), {
    addSuffix: true,
  });
  return (
    <Link
      to={`/blogs2/${blog.title_slug}`}
      className={`${
        block ? "block" : "hidden"
      } flex flex-col min-w-full snap-center`}
    >
      <LazyLoadImage 
        src={blog.image}
        alt={blog.title}
        className="h-48 w-full object-cover aspect-video rounded-lg"
      />

      <div className="h-1/2 flex flex-col gap-2 py-2">
        <div className="flex items-center justify-between pr-3">
          <h3 className="text-xl text-[#323433] font-semibold line-clamp-1">
            {blog.title}
          </h3>

          <BlogStats likes={blog.likes} blogId={blog.id} />
        </div>

        <p className="text-sm font-normal leading-6 text-[#4C4D4D] line-clamp-2">
          {blog.description}
        </p>

        <div className="flex items-center gap-3 mt-5 md:my-3">
          <LazyLoadImage 
            src={logo}
            alt="ellipse"
            className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
          />

          <div className="flex flex-col">
            <span className="text-sm md:text-base font-medium text-[#323433] capitalize">
              {blog.author}
            </span>

            <small className="text-[#656767] text-xs">{timeAgo}</small>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogUMightLike;
