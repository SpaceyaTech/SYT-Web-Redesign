import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// interface Filter {
//     name: string;
//     value: any;
// }

const fetchEventData = async (filterArray) => {
  try {
    let url = `${process.env.REACT_APP_API_BASE_URL}/events/?page_size=5`;

    if (filterArray) {
      Object.keys(filterArray).forEach((key) => {
        // eslint-disable-next-line no-unused-expressions
        filterArray[key] !== null && (url += `&${key}=${filterArray[key]}`);
      });
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    toast.error("Error fetching events");
    throw error;
  }
};

const useTopEvents = (filters) =>
  useQuery({
    queryKey: ["topEvents"],
    queryFn: () => fetchEventData(filters),
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

export default useTopEvents;
