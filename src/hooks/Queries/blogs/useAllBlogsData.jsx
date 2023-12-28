import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { blog1, blog2, blog3 } from "../../../assets/images/blogs-page";
=======
>>>>>>> origin/main
import axios from "axios";
// import { blog1, blog2, blog3 } from "../../../assets/images/blogs-page";

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

export { useBlogsData, useBlogCategories };
