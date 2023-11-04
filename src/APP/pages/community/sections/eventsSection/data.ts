import axios from "axios";

interface Filter {
    name: string;
    value: any;
}

const fetchEventData = async (filter_array?: Filter) => {
    try {
        let url = `${process.env.REACT_APP_API_BASE_URL}/events/?page_size=5`;

        if (filter_array) {
            Object.keys(filter_array).forEach((key) => {
                url += `&` + key + "=" + filter_array[key];
            });
        }
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        console.error("Error fetching events: ", error);
        throw error;
    }
}

export { fetchEventData };