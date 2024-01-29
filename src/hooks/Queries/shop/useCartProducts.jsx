// https://apis.spaceyatech.com/api/cart/swaggs/
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const useProductsInCart = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryKey: ["productsInCart"],
    queryFn: () => fetchProductsInCart(),
    refetchOnWindowFocus: true,
  });

export default useProductsInCart;
