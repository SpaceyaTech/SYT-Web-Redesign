import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const fetchEvents = async (catName = "") => {
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}/events/?category=${catName}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    toast.error("Error fetching similar Events");
    throw new Error(error);
  }
};

export default function useEventsData(catName) {
  return useQuery({
    queryKey: ["eventsData"],
    queryFn: () => fetchEvents(catName),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60,
  });
}
