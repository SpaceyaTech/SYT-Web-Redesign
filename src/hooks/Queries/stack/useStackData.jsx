import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStackData = async () => {
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}/stack`;
    const response = await axios.get(url);
    const teamData = response.data.filter((team) => team.developers.length > 0);
    return teamData;
  } catch (error) {
    throw new Error(error);
  }
};

export default function useStackData() {
  return useQuery({
    queryKey: ["stackData"],
    queryFn: () => fetchStackData(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60,
  });
}
