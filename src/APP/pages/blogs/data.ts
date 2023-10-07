import { blog1, blog2, blog3 } from "../../../assets/images/blogs-page";

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

export const blogCard = [
  {
    id: 1,
    image: blog1,
    title: "The Future of Virtual Reality in Education",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
  {
    id: 2,
    image: blog2,
    title: "Protopie for Ae enthusiasts",
    desc: "This article introduces Protopie, a design and animation tool for creating interactive prototypes. The author discusses...",
    author: "Jane Njeri",
    date: "6 days ago",
  },
  {
    id: 3,
    image: blog3,
    title: "C# or Javascript? It depends",
    desc: "This article explores the pros and cons of using C# or JavaScript for web development. The author compares the two programming languages...",
    author: "Sharon Makena",
    date: "1 day ago",
  },
  {
    id: 4,
    image: blog3,
    title: "Adobe XD, the one left behind",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
  {
    id: 5,
    image: blog2,
    title: "The Future of Virtual Reality in Education",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
  {
    id: 6,
    image: blog1,
    title: "The Future of Virtual Reality in Education",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
  {
    id: 7,
    image: blog3,
    title: "The Future of Virtual Reality in Education",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
  {
    id: 8,
    image: blog1,
    title: "The Future of Virtual Reality in Education",
    desc: "This article delves into the potential of virtual reality to revolutionize education, making learning more immersive and engaging for students",
    author: "Sharon Makena",
    date: "3 days ago",
  },
];

interface BlogCategory {
  id: number;
  name: string;
}

const fetchBlogCategories = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/blog/category/`);
    const blogCat: BlogCategory[] = await response.json();
    return blogCat;
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    throw error;
  }
}

interface Blog {
  id: number;
  title: string;
  description: string;
  category: number;
  likes: number;
  image: string;
  created_at: string;
}

interface BlogList {
  count: number;
  next: string;
  previous: string;
  results: Blog[]
}

const fetchBlogsData = async (page?: number): Promise<BlogList> => {
  let url = `${process.env.REACT_APP_API_BASE_URL}/blog/`;

  if (page) {
    url += `?page=${page}`
  }

  try {
    const response = await fetch(url);
    const data: BlogList = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}

export { fetchBlogCategories, fetchBlogsData };