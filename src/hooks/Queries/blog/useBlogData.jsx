import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const fetchBlogData = async (title_slug) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/blog/${title_slug}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

const useBlogData = (title_slug) =>
  useQuery({
    queryKey: ["blogdata"],
    queryFn: () => fetchBlogData(title_slug),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

// fetch related blogs
const fetchRelatedBlogs = async (categoryId) => {
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}/blog/category/${categoryId}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const useRelatedBlogsData = (categoryId) =>
  useQuery({
    queryKey: ["relatedBlogsData"],
    queryFn: () => fetchRelatedBlogs(categoryId),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

export default useBlogData;
