import { useEffect } from "react";
import { useDataDispatch, useDataState } from "../../contexts/DataContext";
import BlogStats from "../blogs/sections/BlogStats";
import BlogWrapper from "./sections/BlogWrapper";
import { fetchBlogData } from "./data";
import { useParams } from "react-router-dom";

function Blog() {
  const dataState = useDataState();
  const dataDispatch = useDataDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await fetchBlogData(id);
        dataDispatch({ type: "SET_ONE_BLOG", payload: blogData });
      } catch (error) {
        // Handle error
        console.error("Problem fetching blog data:", error);
      }
    };

    fetchData();
  }, [dataDispatch]);

  return (
    <>
      {dataState.blog ? (
        <section className="flex flex-col p-4 md:p-8 lg:p-10">
          <img
            src={dataState.blog.image}
            alt="blog"
            className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
          />

          <div className="flex flex-row items-center justify-between">
            <p className="text-[#4C4D4D] text-sm  md:text-base font-bold">
              {new Date(dataState.blog.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            <BlogStats likes={dataState.blog.likes} />
          </div>

          <BlogWrapper blog={dataState.blog} />

          {/* <RelatedBlogs /> */}
        </section>
      ) : (
        <div>Loading blog...</div>
      )}
    </>
  );
}

export default Blog;
