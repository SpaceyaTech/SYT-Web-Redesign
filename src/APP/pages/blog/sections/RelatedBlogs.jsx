import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRelatedBlogsData } from "../../../../hooks/Queries/blog/useBlogData";
import { filterRelatedBlogs } from "../../../../utilities/FilterBlogs";
import RelatedBlogCard from "./RelatedBlogCard";

function RelatedBlogs({ blogId, categoryId }) {
  const { title_slug } = useParams();

  const {
    data: relatedBlogsData,
    refetch: refetchRelatedBlogsData,

    isPending,
    isError,
    isSuccess,
  } = useRelatedBlogsData(categoryId);

  useEffect(() => {
    refetchRelatedBlogsData();

  }, [refetchRelatedBlogsData, title_slug]);

  const filteredRelatedBlogs = filterRelatedBlogs(
    relatedBlogsData?.blogs,
    title_slug

  );

  return (
    <>
      {isError && <p>Error loading blogs!</p>}

      {isPending && <p>Loading blogs...</p>}

      {isSuccess && filteredRelatedBlogs.length > 0 && (
        <>
          <h2 className="text-2xl text-gray-500 font-semibold underline decoration-green-600 underline-offset-2">

            {filteredRelatedBlogs.length > 1
              ? "Related Articles"
              : "Related Article"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-16 grid-cols-1 py-16">
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
        </>
      )}
    </>
  );
}

export default RelatedBlogs;
