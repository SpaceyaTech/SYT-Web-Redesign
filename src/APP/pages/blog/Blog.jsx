import React from "react";
import { useParams } from "react-router-dom";
import BlogWrapper from "./sections/BlogWrapper";
import useBlogData from "../../../hooks/Queries/blog/useBlogData";

function Blog() {
  const { id } = useParams();
  const { data: blogData, isLoading, isError, isSuccess } = useBlogData(id);

  return (
    <>
      {isError && <p>Error fetching blog details!</p>}
      {isLoading && <p>Loading blog details...</p>}
      {isSuccess && (
        <section className="flex flex-col p-4 md:p-8 lg:p-10">
          <img
            src={blogData.image}
            alt="blog"
            className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
          />

          {/* <div className="flex flex-row items-center justify-between">
            <p className="text-[#4C4D4D] text-sm  md:text-base font-bold">
              {new Date(blogData.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            <BlogStats likes={blogData.likes} />
          </div> */}

          <BlogWrapper blog={blogData} />

          {/* <RelatedBlogs /> */}
        </section>
      )}
    </>
  );
}

export default Blog;
