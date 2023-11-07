import { blog1, blog2, blog3 } from "../../../assets/images/blogs-page";
import axios from "axios";

export const blogCat = [
  {
    id: 1,
    cat: "Software Development",
  },
  {
    id: 2,
    cat: "Design",
  },
  {
    id: 3,
    cat: "Mobile Development",
  },
  {
    id: 4,
    cat: "UX Design",
  },
  {
    id: 5,
    cat: "UI Design",
  },
  {
    id: 6,
    cat: "Technical Writing",
  },
];

// interface BlogCategory {
//   id: number;
//   name: string;
// }

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

// interface Blog {
//   id: number;
//   title: string;
//   description: string;
//   category: number;
//   likes: number;
//   image: string;
//   created_at: string;
// }

// interface BlogList {
//   count: number;
//   next: string;
//   previous: string;
//   results: Blog[]
// }

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
