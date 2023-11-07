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

interface Event {
    id: number;
    name: string;
    about: string;
    link: string;
    location: string;
    mode: string;
    city: string;
    country: string;
    date: string;
    start_time: string;
    end_time: string;
    poster: string;
    category: {
        id: number;
        name: string;
    };
    chapter: {
        id: number;
        name: string;
        about: string;
        city: string;
        country: string;
        socials: {};
        members: number;
        created_at: string;
        updated_at: string;
    }
}

interface Events {
    count: number;
    next: string;
    previous: string;
    results: Event[];

}


const fetchEvents = async(filter_array) => {
    // "chapter_id", "date", "city", "country", "category"
    let url = `${process.env.REACT_APP_API_BASE_URL}/events`;

    let filter_string = "";
    if (filter_array !== null) {
        filter_string += "?";
        Object.keys(filter_array).forEach((key) => {
            filter_string += key + "=" + filter_array[key] + "&";
        });

        url += filter_string;
    }

    try {
        const response = await axios.get<Events>(url);
        return response.data;
    } catch (error) {
        console.error("Error fetchin events: ", error);
        throw error;
    }
}

const fetchOneEvent = async (id) => {
    try {
      const results = await axios.get<Event>(`${process.env.REACT_APP_API_BASE_URL}/events/${id}`);
      return results.data;
    } catch (error) {
      console.error("Error fetching event: ", error);
      throw error;
    }
  }

const fetchCities = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/cities/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cities: ", error);
        throw error;
    }
}

export { fetchEventsCategories, fetchEvents, fetchOneEvent, fetchCities };