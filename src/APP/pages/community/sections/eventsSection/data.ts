import axios from "axios";

interface Filter {
    name: string;
    value: any;
}

const fetchEventData = async (filter?: Filter) => {
    try {
        let url = `${process.env.REACT_APP_API_BASE_URL}/events/?page_size=5`;

        if (filter) {
            url += `&${filter.name}=${filter.value}`
        }
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        console.error("Error fetching events: ", error);
        throw error;
    }
}

export { fetchEventData };