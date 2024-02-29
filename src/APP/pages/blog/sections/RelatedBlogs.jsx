<<<<<<< HEAD

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRelatedBlogsData } from "../../../../hooks/Queries/blog/useBlogData";
import BlogCard from "../../blogs/sections/BlogCard";
import { filterRelatedBlogs } from "../../../../utilities/FilterBlogs";

function RelatedBlogs({ blogId, categoryId }) {
  const { title_slug } = useParams();
=======
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRelatedBlogsData } from "../../../../hooks/Queries/blog/useBlogData";
import { filterRelatedBlogs } from "../../../../utilities/FilterBlogs";
import RelatedBlogCard from "./RelatedBlogCard";

function RelatedBlogs({ blogId, categoryId }) {
  const { titleSlug } = useParams();
>>>>>>> main

  const {
    data: relatedBlogsData,
    refetch: refetchRelatedBlogsData,
    isLoading,
    isError,
    isSuccess,
  } = useRelatedBlogsData(categoryId);

  useEffect(() => {
    refetchRelatedBlogsData();
<<<<<<< HEAD
  }, [title_slug]);

  const filteredRelatedBlogs = filterRelatedBlogs(
    relatedBlogsData?.blogs,
    title_slug
=======
  }, [refetchRelatedBlogsData, titleSlug]);

  const filteredRelatedBlogs = filterRelatedBlogs(
    relatedBlogsData?.blogs,
    titleSlug
>>>>>>> main
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
<<<<<<< HEAD
                .map((blog) => <BlogCard key={blog.id} blog={blog} />)
=======
                .map((blog) => <RelatedBlogCard key={blog.id} blog={blog} />)
>>>>>>> main
            ) : (
              <p className="text-lg italic">No related blogs found!</p>
            )}
          </div>
        </>
      )}
    </>
  );
}

<<<<<<< HEAD
export default RelatedBlogs;
=======
export default RelatedBlogs;
>>>>>>> main
