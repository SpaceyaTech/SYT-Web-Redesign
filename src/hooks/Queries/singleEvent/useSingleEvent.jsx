import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchOneEvent = async (id) => {
  try {
    const results = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/${id}`
    );
    return results.data;
  } catch (error) {
    console.error("Error fetching event: ", error);
    throw error;
  }
};

const useOneEvent = (id) => {
  return useQuery({
    queryKey: ["oneEvent"],
    queryFn: () => fetchOneEvent(id),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
};

export { useOneEvent };
