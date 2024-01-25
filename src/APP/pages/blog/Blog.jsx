
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import BlogWrapper from "./sections/BlogWrapper";
import RelatedBlogs from "./sections/RelatedBlogs";
import { Loader } from "../../components";
import useBlogData from "../../../hooks/Queries/blog/useBlogData";

function Blog() {
  const { title_slug } = useParams();

  const navigate = useNavigate();
  const {
    data: blogData,
    refetch: refetchBlogData,

    isLoading,
    isError,
    isSuccess,
  } = useBlogData(title_slug);


  useEffect(() => {
    refetchBlogData();
  }, [title_slug]);

  return (
    <div className="w-screen max-w-[1440px] mx-auto">
      {isError && navigate("/error-500")}

      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">
            Loading blog details...
          </p>
        </div>
      )}
      {isSuccess && (
        <>
          <section className="flex flex-col p-4 md:p-8 lg:p-10">
            <img
              src={blogData.image}
              alt={blogData.title}
              className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
            />

            <BlogWrapper blog={blogData} />

            <RelatedBlogs
              blogId={blogData?.id}
              categoryId={blogData?.category?.id}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default Blog;
