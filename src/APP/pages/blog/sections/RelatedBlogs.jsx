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

      {isSuccess && (
        <div className="grid sm:grid-cols-2 gap-16 grid-cols-1 py-16">
          {Array.isArray(filteredRelatedBlogs) &&
          filteredRelatedBlogs.length > 0 ? (
            filteredRelatedBlogs.filter(function(blog){
              if(blog.id === blogId ) {
                return false;
              }
              return true;
            }).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          ) : (
            <p>No related blogs found!</p>
          )}
        </div>
      )}
    </>
  );
}

export default RelatedBlogs;
