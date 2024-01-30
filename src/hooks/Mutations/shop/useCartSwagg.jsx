import { useMutation } from "@tanstack/react-query";
import privateAxios from "../../../api/privateAxios";

const AddToCart = async (cart) => {
  try {
    const response = await privateAxios.post("/cart/swaggs/", {
      swagg_id: cart.swaggId,
      product: {
        name: "string",
        description: "string",
        price: "string",
        size: "S",
      },
      quantity: 0,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating swag cart: ", error);
    throw error;
  }
};

const useCartSwagg = (cartItem) => {
  useMutation({
    mutationFn: (cartItem) => AddToCart(cartItem),
  });
};

export default useCartSwagg;
