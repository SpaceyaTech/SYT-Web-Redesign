import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import publicAxios from "../../../api/publicAxios";

const fetchSwag = async () => {
  try {
    const response = await publicAxios.get("/swaggsnew");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Error fetching swag list");
    throw error;
  }
};

const useSwagList = () =>
  useQuery({
    queryKey: ["swagList"],
    queryFn: () => fetchSwag(),
    refetchOnWindowFocus: false,
  });

const fetchSingleSwag = async (id) => {
  try {
    const response = await publicAxios.get(`/swaggs/${id}`);
    return response.data;
  } catch (error) {
    toast.error("Error fetching swag list");
    throw error;
  }
};

const useSingleSwag = (id) =>
  useQuery({
    queryKey: ["singleSwag", id],
    queryFn: () => fetchSingleSwag(id),
    refetchOnWindowFocus: false,
  });

const fetchSwagCategories = async () => {
  try {
    const response = await publicAxios.get("/product-categories");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Error fetching swag list");
    throw error;
  }
};

const useSwagCategory = () =>
  useQuery({
    queryKey: ["swagCategory"],
    queryFn: () => fetchSwagCategories(),
    refetchOnWindowFocus: false,
  });

export { useSingleSwag, useSwagList, useSwagCategory };
