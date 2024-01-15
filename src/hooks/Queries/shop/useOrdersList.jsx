// https://apis.spaceyatech.com/api/orders//
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchOrders = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/orders/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching order summary: ", error);
    throw error;
  }
};

const useOrderSummary = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(),
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 60, 
  });
};

export default useOrderSummary;
