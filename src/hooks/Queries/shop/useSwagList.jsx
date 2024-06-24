// https://apis.spaceyatech.com/api/swaggs/
import { useQuery } from "@tanstack/react-query";
import publicAxios from "../../../api/publicAxios";

const fetchSwag = async () => {
  try {
    const response = await publicAxios.get("/swaggs/");
    console.log("useSwagList", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching swag list: ", error);
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
    console.error("Error fetching swag list: ", error);
    throw error;
  }
};

const useSingleSwag = (id) =>
  useQuery({
    queryKey: ["single swag"],
    queryFn: () => fetchSingleSwag(id),
    refetchOnWindowFocus: false,
  });

const fetchCategorySwags = async (name) => {
  try {
    const response = await publicAxios.get(`/swaggs/?category=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category list: ", error);
    throw error;
  }
};
const useCategorySwag = (name) =>
  useQuery({
    queryKey: ["category swag"],
    queryFn: () => fetchCategorySwags(name),
    refetchOnWindowFocus: false,
  });

export { useSwagList, useSingleSwag, useCategorySwag };
