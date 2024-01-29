// https://apis.spaceyatech.com/api/swaggs/
import { useQuery } from "@tanstack/react-query";
import publicAxios from "../../../api/publicAxios";

const fetchSwag = async () => {
  try {
    const response = await publicAxios.get("/swaggs/");
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

export { useSwagList, useSingleSwag };
