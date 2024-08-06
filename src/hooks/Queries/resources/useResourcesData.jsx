import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// interface Resource {
//   id: number;
//   name: string;
//   description: string;
// }

const fetchResourcesData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/resourcetypes/`
    );
    return response.data;
  } catch (error) {
    toast.error("Error fetching resources");
    throw error;
  }
};

const useResourcesData = () =>
  useQuery({
    queryKey: ["resourcetypes"],
    queryFn: () => fetchResourcesData(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

export default useResourcesData;
