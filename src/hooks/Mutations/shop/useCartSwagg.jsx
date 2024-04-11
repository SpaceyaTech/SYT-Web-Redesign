import { useMutation, useQueryClient } from "@tanstack/react-query";
import publicAxios from "../../../api/publicAxios";
import useAuth from "../../useAuth";

// !!! choose colorSwagg
const useAddSwagToCart = () => {
  const { auth, logout } = useAuth();
  const queryClient = useQueryClient();

  return useMutation(
    async (cartItems) => {
      const response = await publicAxios.post("/cart/swaggs/", cartItems, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${auth?.access}`,
        },
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("Added to cart: ", data);
        queryClient.invalidateQueries(["productsInCart"]);
      },
      onError: (error) => {
        // eslint-disable-next-line no-console
        console.error("Unable to add availability");
        if (error.response.status === 401) {
          logout();
        }
      },
    }
  );
};

const useDeleteSwag = () => {
  const { auth, logout } = useAuth();
  const queryClient = useQueryClient();

  return useMutation(
    async (id) => {
      const response = await publicAxios.delete(`/cart/swaggs/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${auth?.access}`,
        },
      });
      console.log("response ", response.data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("Successfully deleted ", data);
        queryClient.invalidateQueries(["productsInCart"]);
      },
      onError: (error) => {
        // eslint-disable-next-line no-console
        console.error("Unable to delete swag");
        if (error.response.status === 401) {
          logout();
        }
      },
    }
  );
};

export { useAddSwagToCart, useDeleteSwag };
