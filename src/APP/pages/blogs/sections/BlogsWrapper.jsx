import React, { useState, useEffect, useContext } from "react";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import { SearchBlogContext } from "../../../../context/searchBlog";
import {
  useBlogsData,
  useBlogCategories,
} from "../../../../hooks/Queries/blogs/useAllBlogsData";

function SearchResults({ searchText }) {
  return (
    <h3 className="text-black text-xl md:text-3xl font-semibold leading-8 md:leading-loose text-center">
      Showing results for <span className="text-primary">"{searchText}"</span>
    </h3>
  );
}

function BlogsWrapper() {
  const { searchText, searchBlog } = useContext(SearchBlogContext);
  const [selectedCat, setSelectedCat] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: blogsData,
    refetch: refetchBlogsData,
    isLoading,
    isError,
    isSuccess,
  } = useBlogsData(page);

  const { data: blogCategories, status: statusBlogCategories } =
    useBlogCategories();

  useEffect(() => {
    refetchBlogsData();
  }, [page]);

  const handlePageChange = ({ index }) => {
    setPage((prevState) => (prevState = index));
  };

  const handleFilter = (categoryId) => {
    setSelectedCat(categoryId);
  };

  const filterBlogsByCat = (blogs, category) => {
    const filtered = blogs.filter((blog) => blog.category === category);
    return filtered;
  };

  const filteredBlogs = selectedCat
    ? filterBlogsByCat(searchBlog?.results, selectedCat)
    : searchBlog?.results;

  const allBlogs =
    filteredBlogs && Array.isArray(filteredBlogs)
      ? filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      : null;

  return (
    <div className="flex flex-col items-start md:items-center gap-6 px-4 pt-4 xl:px-14 w-full mb-10">
      {isError && <p>Error loading blogs!</p>}
      {isLoading && <p>Loading blogs...</p>}
      {isSuccess && (
        <>
          <div className="w-full md:w-fit overflow-x-auto md:overflow-auto flex flex-row items-center gap-4 md:px-3 md:gap-3 md:mb-2">
            {statusBlogCategories === "error" && (
              <p>Error loading blog categories!</p>
            )}
            {statusBlogCategories === "loading" && <p>...</p>}
            <button
              className={`bg-gray-100 min-w-fit w-fit text-black text-base py-2 px-4 rounded-[40px] cursor-pointer transition-all duration-500 ease-in hover:bg-primary hover:text-white whitespace-normal ${
                "" === selectedCat && "bg-primary text-white "
              }`}
              onClick={() => handleFilter("")}
            >
              All
            </button>
            {statusBlogCategories === "success" &&
            blogCategories &&
            Array.isArray(blogCategories)
              ? blogCategories.map((blog) => (
                  <button
                    key={blog.id}
                    onClick={() => handleFilter(blog.id)}
                    className={`bg-gray-100 min-w-fit w-fit text-black text-base py-2 px-4 rounded-[40px] cursor-pointer transition-all duration-500 ease-in hover:bg-primary hover:text-white whitespace-normal ${
                      blog.id === selectedCat && "bg-primary text-white "
                    }`}
                  >
                    {blog.name}
                  </button>
                ))
              : null}
          </div>

          <div className="mx-auto">
            {searchText && <SearchResults searchText={searchText} />}
          </div>

          {searchBlog?.results.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
              {allBlogs}
            </div>
          ) : (
            <p className="mx-auto">No results!</p>
          )}
          {Array.isArray(blogsData) &&
          blogsData &&
          blogsData.next !== null &&
          blogsData.previous !== null ? (
            <BlogPagination
              count={blogsData.count}
              next={blogsData.next}
              previous={blogsData.previous}
              current={page}
              blogs_per_page={blogsData.results.length}
              onPageChange={handlePageChange}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default BlogsWrapper;
