import { LazyLoadImage } from "react-lazy-load-image-component";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <LazyLoadImage 
        src="/loader.svg"
        width={60}
        height={60}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loader;
