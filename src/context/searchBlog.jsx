import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";
import { useSearchBlog } from "../hooks/Queries/blogs/useAllBlogsData";

export const SearchBlogContext = createContext();

export function SearchBlogProvider({ children }) {
  const [searchText, setSearchText] = useState("");

  const { data: searchBlog, refetch: refetchSearchBlog } =
    useSearchBlog(searchText);

  useEffect(() => {
    const dalayDebounceFn = setTimeout(() => {
      refetchSearchBlog();
    }, 500);

    return () => clearTimeout(dalayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const value = useMemo(
    () => ({ searchText, setSearchText, searchBlog }),
    [searchText, setSearchText, searchBlog]
  );

  return (
    <SearchBlogContext.Provider value={value}>
      {children}
    </SearchBlogContext.Provider>
  );
}

SearchBlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
