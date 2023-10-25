import { useEffect, useState } from "react";
import BlogStats from "../blogs/sections/BlogStats";
import BlogWrapper from "./sections/BlogWrapper";
import { fetchBlogData } from "./data";
import { useParams } from "react-router-dom";

function Blog() {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const theData = await fetchBlogData(id);
        setBlogData((prevState) => {
          return prevState = theData;
        });
      } catch (error) {
        // Handle error
        console.error("Problem fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {blogData ? (
        <section className="flex flex-col p-4 md:p-8 lg:p-10">
          <img
            src={blogData.image}
            alt="blog"
            className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
          />

          <div className="flex flex-row items-center justify-between">
            <p className="text-[#4C4D4D] text-sm  md:text-base font-bold">
              {new Date(blogData.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            <BlogStats likes={blogData.likes} />
          </div>

          <BlogWrapper blog={blogData} />

          {/* <RelatedBlogs /> */}
        </section>
      ) : (
        <div>Loading blog...</div>
      )}
    </>
  );
}

export default Blog;
