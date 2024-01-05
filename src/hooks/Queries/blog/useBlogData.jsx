import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchBlogData = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/blog/${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

const useBlogData = (id) => {
  return useQuery({
    queryKey: ["blogdata"],
    queryFn: () => fetchBlogData(id),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
};

export default useBlogData;
