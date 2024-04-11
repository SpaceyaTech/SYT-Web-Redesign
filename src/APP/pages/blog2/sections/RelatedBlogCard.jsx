/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RelatedBlogCard({ blog }) {
  const timeAgo = formatDistanceToNow(new Date(blog.created_at), {
    addSuffix: true,
  });
  return (
    <Link
      className="flex flex-row items-center gap-2 w-64"
      to={`/blogs2/${blog.title_slug}`}
    >
      <LazyLoadImage 
        src={`https://apis.spaceyatech.com${blog.image}`}
        alt={blog.title}
        className="object-cover h-20 w-20"
      />

      <div className="flex flex-col">
        <h4 className="text-sm font-semibold line-clamp-2">{blog.title}</h4>
        <p className="text-xs font-medium text-[#323433] capitalize">
          {blog.author}
        </p>
        <small className="text-xs text-[#656767]">{timeAgo}</small>
      </div>
    </Link>
  );
}

export default RelatedBlogCard;
