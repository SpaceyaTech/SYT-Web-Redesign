import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// interface Filter {
//     name: string;
//     value: any;
// }

const fetchEventData = async (filterArray) => {
  try {
    let url = `${process.env.REACT_APP_API_BASE_URL}/events/?page_size=5`;

    if (filterArray) {
      Object.keys(filterArray).forEach((key) => {
        filterArray[key] !== null &&
          (url += `&` + key + "=" + filterArray[key]);
      });
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching events: ", error);
    throw error;
  }
};

const useTopEvents = (filters) => {
  return useQuery({
    queryKey: ["topEvents"],
    queryFn: () => fetchEventData(filters),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
};

export default useTopEvents;
