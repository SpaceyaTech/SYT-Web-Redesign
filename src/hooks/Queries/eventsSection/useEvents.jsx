import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchEvents = async (catName) => {
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}/events/?category=${catName}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching similar Events: ", error);
    throw new Error(error);
  }
};

export const useEventsData = (catName) => {
  return useQuery({
    queryKey: ["eventsData"],
    queryFn: () => fetchEvents(catName),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60,
  });
};
