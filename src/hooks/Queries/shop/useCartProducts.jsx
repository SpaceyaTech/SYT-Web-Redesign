// https://apis.spaceyatech.com/api/cart/swaggs/
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProductsInCart = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/cart/swaggs/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products in cart: ", error);
    throw error;
  }
};

const useProductsInCart = () => {
  return useQuery({
    queryKey: ["productsInCart"],
    queryFn: () => fetchProductsInCart(),
    refetchOnWindowFocus: true,
  });
};

export default useProductsInCart;
