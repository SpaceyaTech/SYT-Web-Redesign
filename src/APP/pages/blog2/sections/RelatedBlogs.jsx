import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRelatedBlogsData } from "../../../../hooks/Queries/blog/useBlogData";
import { filterRelatedBlogs } from "../../../../utilities/FilterBlogs";

import RelatedBlogCard from "./RelatedBlogCard";

function RelatedBlogs({ blogId, categoryId }) {
  const { titleSlug } = useParams();

  const {
    data: relatedBlogsData,
    refetch: refetchRelatedBlogsData,
    isLoading,
    isError,
    isSuccess,
  } = useRelatedBlogsData(categoryId);

  useEffect(() => {
    refetchRelatedBlogsData();
  }, [titleSlug]);

  const filteredRelatedBlogs = filterRelatedBlogs(
    relatedBlogsData?.blogs,
    titleSlug
  );

  return (
    <>
      {isError && <p>Error loading blogs!</p>}
      {isLoading && <p>Loading blogs...</p>}

      {isSuccess && filteredRelatedBlogs.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-[#29CC6A] text-lg font-bold leading-normal">
            {filteredRelatedBlogs.length > 1
              ? "Related Articles"
              : "Related Article"}
          </h2>
          <div className="flex flex-col gap-4">
            {Array.isArray(filteredRelatedBlogs) &&
            filteredRelatedBlogs.length > 0 ? (
              filteredRelatedBlogs
                .filter(function (blog) {
                  if (blog.id === blogId) {
                    return false;
                  }
                  return true;
                })
                .map((blog) => <RelatedBlogCard key={blog.id} blog={blog} />)
            ) : (
              <p className="text-lg italic">No related blogs found!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RelatedBlogs;
