import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const joinCommunity = async (data) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/members`;

  try {
    const response = await axios.post(url, { data });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const useJoinCommunity = (data) => {
  return useQuery({
    queryKey: ["joinCommunity"],
    queryFn: () => joinCommunity(data),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 60,
  });
};

export default useJoinCommunity;
