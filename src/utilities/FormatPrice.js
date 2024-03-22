export default function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  }).format(price);
  return formattedPrice;
}
