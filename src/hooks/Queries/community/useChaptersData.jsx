import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// interface Chapter {
//     id: number;
//     country: string;
//     city: string;
//     name: string;
//     members: number;
//     banner: string;
// }

const fetchChaptersData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/chapter/`
    );
    return response.data;
  } catch (error) {
    toast.error("Error fetching chapters:", error);
    throw error;
  }
};

const useChaptersData = () =>
  useQuery({
    queryKey: ["allChapters"],
    queryFn: () => fetchChaptersData(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
  });

export default useChaptersData;
