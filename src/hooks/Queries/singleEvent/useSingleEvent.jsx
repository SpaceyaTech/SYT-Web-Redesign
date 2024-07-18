import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const fetchOneEvent = async (id) => {
  try {
    const results = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/${id}`
    );
    return results.data;
  } catch (error) {
    toast.error("Error fetching event");
    throw error;
  }
};

const useOneEvent = (id) =>
  useQuery({
    queryKey: ["oneEvent"],
    queryFn: () => fetchOneEvent(id),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

export default useOneEvent ;
