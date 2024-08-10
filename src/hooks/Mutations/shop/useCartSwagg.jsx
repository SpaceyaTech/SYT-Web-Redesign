import { useMutation, useQueryClient } from "@tanstack/react-query";
import publicAxios from "../../../api/publicAxios";
import useAuth from "../../useAuth";

// !!! choose colorSwagg
const useAddSwagToCart = () => {
  const { logout } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartItems) => {
      const response = await publicAxios.post("/cart-items/", cartItems, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${auth?.access}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productsInCart"] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error("Unable to add availability");
      if (error.response.status === 401) {
        logout();
      }
    },
  });
};

const useDeleteSwag = () => {
  const { logout } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await publicAxios.delete(`/cart-items/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${auth?.access}`,
        },
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productsInCart"] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error("Unable to delete swag");
      if (error.response.status === 401) {
        logout();
      }
    },
  });
};

export { useAddSwagToCart, useDeleteSwag };
