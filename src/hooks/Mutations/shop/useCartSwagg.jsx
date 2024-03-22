import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateAxios from "../../../api/privateAxios";
import useAuth from "../../useAuth";
import publicAxios from "../../../api/publicAxios";
import { toast } from "react-hot-toast";

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
        // console.log("Added to cart: ", data);
        const obj = {
          "swagg_id": "0d0aacc0-9ed8-4c13-8038-41a8f42642cd",
          "product": {
            "description":
              "Meet our Signature T-Shirt, engineered with tech-savvy comfort in mind. Crafted from premium materials, it seamlessly blends style with innovation. Perfect for work or play, its breathable fabric keeps you cool while you conquer coding challenges or unwind after a long day of programming. Elevate your wardrobe with our tech-inspired tee and embrace the future of fashion.",
            "name": "Tech-Infused Comfort",
            "price": "1000.00",
            "size": "M",
          },
          "quantity": 4,
        };

        queryClient.invalidateQueries(["productsInCart"]);
      },
      onError: (error) => {
        // eslint-disable-next-line no-console
        console.error("Unable to add availability");
        toast("❌ Unable to add item to cart", { type: "error" });
        // if (error.response.status === 401) {
        //   logout();
        // }
      },
    }
  );
};

const useDeleteSwag = () => {
  const { auth, logout } = useAuth();
  const queryClient = useQueryClient();

  return useMutation(
    async (id) => {
      const response = await privateAxios.delete(`/cart/swaggs/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.access}`,
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
