import axios from "axios";

interface Blog {
    id: number;
    title: string;
    description: string;
    body: string;
    // category: string; //We need to return real category alongside id
    image: string;
    created_at: string;
    likes: string;
    author?: string;
}

const fetchBlogData = async (id) => {
    try {
        const response = await axios.get<Blog>(`${process.env.REACT_APP_API_BASE_URL}/blog/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        throw error;
    }
};

export { fetchBlogData };