import { useMutation, useQueryClient } from "@tanstack/react-query";
import publicAxios from "../../../api/publicAxios";

const subscribeNewsletter = async (customerInfo) => {
  const response = await publicAxios.post(
    "/subscribe-newsletter/",
    customerInfo,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const useSubscribeNewsletter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subscribeNewsletter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscribeNewsleter"] });
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.error("Unable to subscribe you");
    },
  });
};

export default useSubscribeNewsletter;
