import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// interface EventCategory {
//     id: number;
//     name: string;
// }

const fetchEventsCategories = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events-categories/`
    );
    return response.data;
  } catch (error) {
    toast.error("Error fetching events categories: ", error);
    throw error;
  }
};

const useEventsCategories = () => useQuery({
    queryKey: ["eventsCategories"],
    queryFn: () => fetchEventsCategories(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
// interface Event {
//     id: number;
//     name: string;
//     about: string;
//     link: string;
//     location: string;
//     mode: string;
//     city: string;
//     country: string;
//     date: string;
//     start_time: string;
//     end_time: string;
//     poster: string;
//     category: {
//         id: number;
//         name: string;
//     };
//     chapter: {
//         id: number;
//         name: string;
//         about: string;
//         city: string;
//         country: string;
//         socials: {};
//         members: number;
//         created_at: string;
//         updated_at: string;
//     }
// }

// interface Events {
//     count: number;
//     next: string;
//     previous: string;
//     results: Event[];

// }

const fetchEvents = async (filterArray) => {
  // "chapter_id", "date", "city", "country", "category"
  let url = `${process.env.REACT_APP_API_BASE_URL}/events`;

  let filterString = "";
  if (filterArray !== null) {
    filterString += "?";
    Object.keys(filterArray).forEach((key) => {
      filterString += `${key  }=${  filterArray[key]  }&`;
    });

    url += filterString;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    toast.error("Error fetching events: ", error);
    throw error;
  }
};

const useAllEvents = (filters) => useQuery({
    queryKey: ["allEvents"],
    queryFn: () => fetchEvents(filters),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

const fetchCities = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/cities/`
    );
    return response.data;
  } catch (error) {
    toast.error("Error fetching cities: ", error);
    throw error;
  }
};

const useAllCities = () => useQuery({
    queryKey: ["topCities"],
    queryFn: () => fetchCities(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

export { useAllCities, useEventsCategories, useAllEvents, fetchEvents };
