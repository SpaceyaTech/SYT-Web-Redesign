import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Advert, BlogHeader, BlogBody } from "./sections";
import useBlogData from "../../../hooks/Queries/blog/useBlogData";
import { Loader } from "../../components";

function Blog2() {
  const { titleSlug } = useParams();
  const navigate = useNavigate();

  const {
    data: blogData,
    refetch: refetchBlogData,
    isLoading,
    isError,
    isSuccess,
  } = useBlogData(titleSlug);

  useEffect(() => {
    refetchBlogData();
  }, [titleSlug]);

  return (
    <div className="max-w-[1024px] mx-auto">
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
          <Advert />
          <BlogHeader
            title={blogData?.title}
            description={blogData?.description}
            image={blogData?.image}
            author={blogData?.author}
            createdAt={blogData?.created_at}
            id={blogData?.id}
            likes={blogData?.likes}
          />
          <BlogBody
            id={blogData?.id}
            categoryId={blogData?.category.id}
            blogBody={blogData?.body}
          />
        </>
      )}
    </div>
  );
}

export default Blog2;
