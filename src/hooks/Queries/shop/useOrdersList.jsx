// https://apis.spaceyatech.com/api/orders//
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import publicAxios from "../../../api/publicAxios";

const fetchOrders = async () => {
  try {
    const response = await publicAxios.get("/orders/");
    return response.data;
  } catch (error) {
    toast.error("Error fetching order summary");
    throw error;
  }
};

const useOrderSummary = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(),
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 60,
  });

// https://apis.spaceyatech.com/api/orders/{orders_pk}/items/
const fetchSingleOrder = async (id) => {
  const authObject = JSON.parse(localStorage.getItem("auth")) || {};
  const { access } = authObject;

  try {
    const response = await publicAxios.get(`/orders/${id}/items/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (error) {
    toast.error("Error fetching order item");
    if (error.response.status === 401) {
      localStorage.removeItem("auth");
    }
    throw error;
  }
};

const useSingleOrder = (id) =>
  useQuery({
    queryKey: ["singleOrder", id],
    queryFn: () => fetchSingleOrder(id),
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 60,
  });

export { useOrderSummary, useSingleOrder };
