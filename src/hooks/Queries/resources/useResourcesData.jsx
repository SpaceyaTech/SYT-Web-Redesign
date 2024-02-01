import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// interface Resource {
//   id: number;
//   name: string;
//   description: string;
// }

const fetchResourcesData = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    throw error;
  }
};

const useResourcesData = (id) => {
  return useQuery({
    queryKey: ["resourcetypes"],
    queryFn: () => fetchResourcesData(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });
};

export default useResourcesData;
