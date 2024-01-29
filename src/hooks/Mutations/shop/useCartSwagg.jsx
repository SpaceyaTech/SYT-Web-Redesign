import { useMutation } from "@tanstack/react-query";

const useCartSwagg = () => {
  const addToCartMutation = useMutation((data) => {
    // Perform the mutation logic here
    // You can access the parameters like data.swagg_id, data.product, and data.quantity
    // Example: Add the product to the cart
    const { swagg_id, product, quantity } = data;
    const { name, description, price, size } = product;

    // Perform the mutation logic here
    // Example: Add the product to the cart
    const cartItem = {
      swagg_id,
      name,
      description,
      price,
      size,
      quantity,
    };

    // Replace this with your actual mutation logic
    // Example: Call an API to add the product to the cart
    return fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify(cartItem),
    });
  });

  return addToCartMutation;
};



export default useCartSwagg;
