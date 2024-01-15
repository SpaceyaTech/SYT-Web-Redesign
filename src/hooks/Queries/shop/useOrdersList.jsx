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
    queryFn: () => useSingleOrder(),
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 60,
  });
};

// https://apis.spaceyatech.com/api/orders/{orders_pk}/items/
const fetchSingleOrder = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/orders/${id}/items/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching order item: ", error);
    throw error;
  }
};

const useSingleOrder = (id) => {
  return useQuery({
    queryKey: ["singleOrder"],
    queryFn: () => fetchSingleOrder(id),
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 60,
  });
};

export { useOrderSummary, useSingleOrder };
