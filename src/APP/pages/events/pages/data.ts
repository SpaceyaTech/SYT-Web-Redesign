import axios from "axios";

interface EventCategory {
    id: number;
    name: string;
}

const fetchEventsCategories = async() => {
    try {
        const response = await axios.get<EventCategory[]>(`${process.env.REACT_APP_API_BASE_URL}/events-categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events categories: ", error);
        throw error;
    }
}

export { fetchEventsCategories };