import React from "react";
import { useParams } from "react-router-dom";

import BlogWrapper from "./sections/BlogWrapper";
import RelatedBlogs from "./sections/RelatedBlogs";
import useBlogData from "../../../hooks/Queries/blog/useBlogData";

function Blog() {
  const { title_slug } = useParams();
  const {
    data: blogData,
    isLoading,
    isError,
    isSuccess,
  } = useBlogData(title_slug);

  return (
    <div className="w-screen max-w-[1440px] mx-auto">
      {isError && <p>Error fetching blog details!</p>}
      {isLoading && <p>Loading blog details...</p>}
      {isSuccess && (
        <section className="flex flex-col p-4 md:p-8 lg:p-10">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
          />

          <BlogWrapper blog={blogData} />

          <RelatedBlogs categoryId={blogData?.category?.id} />
        </section>
      )}
    </div>
  );
}

export default Blog;
