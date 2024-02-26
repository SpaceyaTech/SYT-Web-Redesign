import React, { useState } from "react";
import { useParams } from "react-router-dom";

import BlogsUMightLike from "./BlogUMightLike";
import { useBlogsData } from "../../../../hooks/Queries/blogs/useAllBlogsData";
import { filteredReadNextBlogs } from "../../../../utilities/FilterBlogs";

function NextRead() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titleSlug } = useParams();

  const { data: blogsData } = useBlogsData(1);

  const readNextBlogs = filteredReadNextBlogs(blogsData?.results, titleSlug);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? readNextBlogs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === readNextBlogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto max-w-[924px] flex flex-col gap-6 items-center px-0 md:px-3 w-full mt-10">
      <h4 className="text-xl md:text-2xl font-semibold leading-normal">
        You might like these
      </h4>

      <div className="flex items-center md:justify-between gap-0 md:gap-5 w-full">
        {/* left */}
        <button
          className="w-6 md:w-10 h-6 md:h-10"
          type="button"
          onClick={handlePrev}
        >
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M21.5 42C33.0791 42 42.5 32.5791 42.5 21C42.5 9.42093 33.0791 0 21.5 0C9.92093 0 0.5 9.42093 0.5 21C0.5 32.5791 9.92093 42 21.5 42ZM21.5 38.7692C11.6672 38.7692 3.73077 30.8328 3.73077 21C3.73077 11.1672 11.6672 3.23077 21.5 3.23077C31.3328 3.23077 39.2692 11.1672 39.2692 21C39.2692 30.8328 31.3328 38.7692 21.5 38.7692ZM24.3754 31.8554L26.7015 29.5292L18.1658 21L26.6983 12.4708L24.3722 10.1446L14.6798 19.8369L13.5717 21L14.6815 22.1631L24.3754 31.8554Z"
              fill="#009975"
            />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex items-center overflow-scroll scroll-smooth snap-x w-full md:w-4/5">
          {readNextBlogs.map((blog, index) => (
            <BlogsUMightLike
              key={blog.id}
              blog={blog}
              block={index === currentIndex}
            />
          ))}
        </div>

        {/* right */}
        <button
          className="w-6 md:w-10 h-6 md:h-10"
          type="button"
          onClick={handleNext}
        >
          <svg
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M21.5 0C9.92092 0 0.5 9.42092 0.5 21C0.5 32.5791 9.92092 42 21.5 42C33.0791 42 42.5 32.5791 42.5 21C42.5 9.42092 33.0791 0 21.5 0ZM21.5 3.23077C31.3328 3.23077 39.2692 11.1672 39.2692 21C39.2692 30.8328 31.3328 38.7692 21.5 38.7692C11.6672 38.7692 3.73077 30.8328 3.73077 21C3.73077 11.1672 11.6672 3.23077 21.5 3.23077ZM18.6246 10.1446L16.2985 12.4708L24.8342 21L16.3017 29.5292L18.6278 31.8554L28.3202 22.1631L29.4283 21L28.3185 19.8369L18.6246 10.1446Z"
              fill="#009975"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NextRead;
