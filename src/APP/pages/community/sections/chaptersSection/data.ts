import axios from "axios";

interface Chapter {
    id: number;
    country: string;
    city: string;
    name: string;
    members: number;
    banner: string;
}

const fetchChaptersData = async () => {
    try {
        const response = await axios.get<Chapter[]>(`${process.env.REACT_APP_API_BASE_URL}/chapter/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching chapters:", error);
        throw error;
    }
};

export { fetchChaptersData };