import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRelatedBlogsData } from "../../../../hooks/Queries/blog/useBlogData";
import BlogCard from "../../blogs/sections/BlogCard";
import { filterRelatedBlogs } from "../../../../utilities/FilterBlogs";

function RelatedBlogs({ blogId, categoryId }) {
  const { title_slug } = useParams();

  const {
    data: relatedBlogsData,
    refetch: refetchRelatedBlogsData,
    isLoading,
    isError,
    isSuccess,
  } = useRelatedBlogsData(categoryId);

  useEffect(() => {
    refetchRelatedBlogsData();
  }, [title_slug]);

  const filteredRelatedBlogs = filterRelatedBlogs(
    relatedBlogsData?.blogs,
    title_slug
  );

  return (
    <>
      {isError && <p>Error loading blogs!</p>}
      {isLoading && <p>Loading blogs...</p>}


      {isSuccess && filteredRelatedBlogs.length > 0 && (
        <>
          <h2 className="text-2xl text-black font-semibold underline decoration-green-600 underline-offset-2">
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
                .map((blog) => <BlogCard key={blog.id} blog={blog} />)
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
