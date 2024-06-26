import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useBlogData from "../../hooks/Queries/blog/useBlogData";
import { Loader } from "../../components";
import BlogWrapper from "./sections/BlogWrapper";
import RelatedBlogs from "./sections/RelatedBlogs";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Blog() {
  const { titleSlug } = useParams();

  const navigate = useNavigate();
  const {
    data: blogData,
    refetch: refetchBlogData,
    isPending,
    isError,
    isSuccess,
  } = useBlogData(titleSlug);

  useEffect(() => {
    refetchBlogData();
  }, [titleSlug]);

  return (
    <div className="w-screen max-w-[1440px] mx-auto">
      {isError && navigate("/error-500")}

      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">
            Loading blog details...
          </p>
        </div>
      )}
      {isSuccess && (
        <section className="flex flex-col p-4 md:p-8 lg:p-10">
          <LazyLoadImage 
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
      )}
    </div>
  );
}

export default Blog;
