import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/blog/category/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blog categories: ", error);
    throw error;
  }
};

const useBlogCategories = () => {
  return useQuery({
    queryKey: ["blogcategories"],
    queryFn: () => fetchBlogCategories(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
};

const fetchBlogsData = async (page) => {
  let url = `${process.env.REACT_APP_API_BASE_URL}/blog/`;

  if (page) {
    url += `?page=${page}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

const useBlogsData = (page) => {
  return useQuery({
    queryKey: ["blogsdata"],
    queryFn: () => fetchBlogsData(page),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
};

// Search blog
const fetchSearchBlog = async (keyword) => {
  // if (keyword === "") return;

  const url = `${process.env.REACT_APP_API_BASE_URL}/blog/?keyword=${keyword}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const useSearchBlog = (keyword) => {
  return useQuery({
    queryKey: ["searchBlog"],
    queryFn: () => fetchSearchBlog(keyword),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60,
  });
};

export { useBlogsData, useBlogCategories, useSearchBlog };
