import React, { useState, useEffect, useContext } from "react";

import { SearchBlogContext } from "../../../context/searchBlog";
import {
  useBlogsData,
  useBlogCategories,
} from "../../../hooks/Queries/blogs/useAllBlogsData";

import { filterBlogsByCat } from "../../../utilities/FilterBlogs";
import { Loader } from "../../../components";

import Error500 from "../../errorPages/Error500";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import FeaturedBlogs from "./FeaturedBlogs";

function SearchResults({ searchText }) {
  return (
    <h3 className="text-black text-xl md:text-3xl font-semibold leading-8 md:leading-loose text-center">
      Showing results for
      <span className="text-primary"> "{searchText}"</span>
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
    isPending,
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

  const filteredBlogsByCat = filterBlogsByCat(searchBlog?.results, selectedCat);

  const filteredBlogs = selectedCat ? filteredBlogsByCat : searchBlog?.results;

  const allBlogs =
    filteredBlogs && Array.isArray(filteredBlogs)
      ? filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      : null;

  return (
    <div className="flex flex-col items-start md:items-center gap-6 px-4 pt-4 xl:px-14 w-full mb-10">
      {isError && <Error500 />}
      {isPending && (
        <div className="w-full flex flex-col items-center justify-center gap-5 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading blogs...</p>
        </div>
      )}
      {isSuccess && (
        <>
          {!searchText && <FeaturedBlogs />}

          <div className="w-full md:w-fit overflow-x-auto md:overflow-auto flex flex-row items-center gap-4 md:px-3 md:gap-3 md:mb-2">
            {statusBlogCategories === "error" && (
              <p>Error loading blog categories!</p>
            )}
            {statusBlogCategories === "loading" && <p>...</p>}

            <button
              type="button"
              className={`bg-gray-100 min-w-fit w-fit text-black text-base py-2 px-4 rounded-[40px] cursor-pointer transition-all duration-500 ease-in hover:bg-primary hover:text-white whitespace-normal ${
                selectedCat === "" && "bg-primary text-white "
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
                    type="button"
                    key={blog.id}
                    onClick={() => handleFilter(blog.id)}
                    className={`bg-gray-100 min-w-fit w-fit text-black text-base py-2 px-4 rounded-[40px] cursor-pointer transition-all duration-500 ease-in hover:bg-primary hover:text-white whitespace-normal ${
                      blog.id === selectedCat && "bg-primary text-white "
                    }`}
                  >
                    {blog.name}
                  </button>
                ))
              : ""}
          </div>

          <div className="mx-auto">
            {searchText && <SearchResults searchText={searchText} />}
          </div>

          {searchBlog?.results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default BlogsWrapper;
