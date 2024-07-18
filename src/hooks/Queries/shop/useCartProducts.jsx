// https://apis.spaceyatech.com/api/cart/swaggs/
import { useQuery } from "@tanstack/react-query";
import publicAxios from "../../../api/publicAxios";

const fetchProductsInCart = async () => {
  const authObject = JSON.parse(localStorage.getItem("auth")) || {};
  const { access } = authObject;

  try {
    const response = await publicAxios.get("/cart/swaggs/", {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${access}`,
      },
    });
    console.log("fetchProductsInCart: ", response.data); // !!! Image doesn't have a prefixed URL domain i.e it comes as "/media/product_images/main-sample_copy.png" instead of "https://apis.spaceyatech.com/media/product_images/main-sample_copy.png"

    return response.data;
  } catch (error) {
    console.error("Error fetching products in cart: ", error);
    // if (error.response.status === 401) {
    //   localStorage.removeItem("auth");
    // }
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
