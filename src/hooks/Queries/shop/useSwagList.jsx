// https://apis.spaceyatech.com/api/swaggs/
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSwag = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/swaggs/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching swag list: ", error);
    throw error;
  }
};

const useSwagList = () => {
  return useQuery({
    queryKey: ["swagList"],
    queryFn: () => fetchSwag(),
    refetchOnWindowFocus: false,
  });
};

export default useSwagList;
