// https://apis.spaceyatech.com/api/cart/swaggs/
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import publicAxios from "../../../api/publicAxios";

const fetchProductsInCart = async () => {
  // const authObject = JSON.parse(localStorage.getItem("auth")) || {};
  // const { access } = authObject;

  try {
    const response = await publicAxios.get("/cart/swaggs/", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${access}`,
      },
    });

    return response.data;
  } catch (error) {
    toast.error("Error fetching products in cart")

    // if (error.response.status === 401) {
    //   localStorage.removeItem("auth");
    // }
    throw error;
  }
};

const useProductsInCart = () =>
   
  useQuery({
    queryKey: ["productsInCart"],
    queryFn: () => fetchProductsInCart(),
    refetchOnWindowFocus: true,
  });

export default useProductsInCart;
