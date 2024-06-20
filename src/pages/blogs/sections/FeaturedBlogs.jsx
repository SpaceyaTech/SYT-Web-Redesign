/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useBlogsData } from "../../../hooks/Queries/blogs/useAllBlogsData";
import { filteredReadNextBlogs } from "../../../utilities/FilterBlogs";

function FeaturedBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // placeholder data
  const { titleSlug } = useParams();
  const { data: blogsData } = useBlogsData(1);
  const readNextBlogs = filteredReadNextBlogs(
    blogsData?.results,
    titleSlug
  ).slice(0, 2);

  const handleToggle = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="overflow-scroll snap-x scroll-smooth flex flex-row w-full">
      {readNextBlogs.map((blog) => (
        <FeaturedBlogCard
          key={blog.id}
          blog={blog}
          handleToggle={handleToggle}
          currentIndex={currentIndex}
        />
      ))}
    </div>
  );
}

export default FeaturedBlogs;

function FeaturedBlogCard({ blog, currentIndex, handleToggle }) {
  return (
    <div
      className={`min-w-full snap-center my-6 md:my-10 aspect-video bg-center bg-no-repeat bg-cover size-full rounded-lg md:rounded-2xl relative px-4 md:px-10 py-6 md:py-12 flex flex-col gap-5 items-start justify-end ${
        currentIndex !== 0 ? "-translate-x-full" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("${blog.image}")`,
      }}
    >
      <h2 className="text-primary text-base md:text-2xl font-bold">Featured</h2>
      <div className="flex space-x-8 text-white w-full flex-row">
        <div className="flex-1 flex flex-col gap-3">
          <Link
            to={`/blogs/${blog.title_slug}`}
            className="text-[#CBCDCC] hover:text-white hover:underline decoration-primary transition-all ease-in duration-300 text-xl line-clamp-2 md:text-[40px] md:tracking-wide leading-normal font-normal"
          >
            {blog.title}
          </Link>

          <p className="text-sm md:text-base font-normal max-w-5xl line-clamp-3 md:line-clamp-5">
            {blog.description}
          </p>
        </div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleToggle}
          className="mt-3 cursor-pointer"
        >
          <path
            d="M28 0C12.5612 0 0 12.5612 0 28C0 43.4388 12.5612 56 28 56C43.4388 56 56 43.4388 56 28C56 12.5612 43.4388 0 28 0ZM28 4.30769C41.1105 4.30769 51.6923 14.8895 51.6923 28C51.6923 41.1105 41.1105 51.6923 28 51.6923C14.8895 51.6923 4.30769 41.1105 4.30769 28C4.30769 14.8895 14.8895 4.30769 28 4.30769ZM24.1662 13.5262L21.0646 16.6277L32.4455 28L21.0689 39.3723L24.1705 42.4738L37.0935 29.5508L38.5711 28L37.0914 26.4492L24.1662 13.5262Z"
            fill="#CBCDCC"
          />
        </svg>
      </div>
    </div>
  );
}
