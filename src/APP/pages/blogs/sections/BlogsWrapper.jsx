import React, { useState, useEffect } from "react";
import { blogCat, fetchBlogCategories, fetchBlogsData } from "../data";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import { useQuery } from "react-query";

const BlogsWrapper = () => {
  const [page, setPage] = useState(1);
  const { data: blogsData, status: statusBlogsData, refetch: refetchBlogsData } = useQuery("blogsdata", () => fetchBlogsData(page));
  const { data: blogCategories, status: statusBlogCategories } = useQuery("blogcategories", () => fetchBlogCategories());

  useEffect(() => {
    refetchBlogsData();
  }, [page])

  const handlePageChange = ({ index }) => {
    setPage((prevState) => prevState=index);
  };

  const SearchResults = ({ searchText }) => {
    return (
      <h3 className="text-black text-xl md:text-3xl font-semibold leading-8 md:leading-loose text-center">
        Showing results for “{searchText}”
      </h3>
    );
  };

  return (
    <div className="flex flex-col items-start md:items-center gap-8 md:gap-16 px-4 pt-4 xl:px-14 w-full mb-10 md:mb-40">
      { statusBlogsData === "error" && <p>Error loading blogs!</p> }
      { statusBlogsData === "loading" && <p>Loading blogs...</p> }
      { statusBlogsData === "success" && 
        <>
        <div className="w-max overflow-scroll md:overflow-auto flex flex-row items-center gap-3">
        { statusBlogCategories === "error" && <p>Error loading blog categories!</p> }
        { statusBlogCategories === "loading" && <p>...</p> }
        { statusBlogCategories === "success" &&
          blogCategories && Array.isArray(blogCategories) ? (
            blogCategories.map((blog) => (
              <span
                key={blog.id}
                className="bg-gray-100 text-black text-sm py-1 px-3 rounded-2xl cursor-pointer transition-all duration-500 ease-in hover:bg-[#009975] hover:text-white active:bg-[#009975] active:text-white w-fit whitespace-normal"
              >
                {blog.name}
              </span>
            ))
          ) : ''
        }
      </div>
      <div className="grid sm:grid-cols-2  gap-16 grid-cols-1">
        {blogsData && Array.isArray(blogsData.results) ? (
          blogsData.results.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : ''}
      </div>
      {blogsData.next === null &&
      blogsData.previous === null ? (
        ""
      ) : (
        <BlogPagination
          count={blogsData.count}
          next={blogsData.next}
          previous={blogsData.previous}
          current={page}
          blogs_per_page={blogsData.results.length}
          onPageChange={handlePageChange}
        />
      )}
      </> }
    </div>
  );
};

export default BlogsWrapper;
