import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    header: "build your MVP",
    desc: "Have a great idea but no team to help you bring it to life? SYT will help you build your product MVP at an affordable price",
    button: "Talk to us",
  },
  {
    id: 2,
    header: "find talent",
    desc: "Talk to us to hire experienced tech talent like Software Engineers, Designers, DevOps talent among others for your organization",
    button: "Talk to us",
  },
  {
    id: 3,
    header: "Join Mentorlst",
    desc: "Are you a techie looking to start your career? Get mentors within the tech indutry on Mentorlst",
    button: "Learn more",
  },
  {
    id: 4,
    header: "Mastori",
    desc: "Do you want your tech blogs featured on the SYT platform? We welcome all writers big and small to join our blog platform Mastori(Stories) and contribute to the techspace",
    button: "Learn more",
  },
];

const ProductsSections = () => {
  return (
    <div className="my-10 grid sm:grid-cols-2  gap-x-6 gap-y-12 grid-cols-1">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsSections;
