import hero_image from "../../../../assets/images/hero_image.png";
import gdg_image from "../../../../assets/images/gdg.png";
import react_ke from "../../../../assets/images/reactke.png";
import kamilimu from "../../../../assets/images/kamilimu.png";
import cytonn from "../../../../assets/images/cytonn.png";
import osca from "../../../../assets/images/osca.png";
import spheron from "../../../../assets/images/spheron.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const partners = [spheron, gdg_image, react_ke, kamilimu, cytonn, osca];

function HeroSection2() {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-8 py-4 px-4 md:px-1 w-full">
      {/* intro */}
      <div className="px-5 md:px-14 flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
        {/* welcome */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start gap-6">
          <h1 className="md:text-[40px] text-2xl leading-8 md:leading-normal font-medium text-gray-900 text-center md:text-left">
            Accelerate your <span className="text-primary">growth</span> and
            unlock your potential in the tech ecosphere
          </h1>
          <p className="text-sm md:text-xl font-normal leading-relaxed text-center md:text-left">
            The fastest growing Africa, open-source community looking to change
            the way young Africans get started in technology.
          </p>

          <button className="text-white bg-primary border-0 py-3 px-8 focus:outline-none rounded-lg text-lg w-full md:w-fit">
            Join the community
          </button>
        </div>

        {/* image */}
        <div className="w-full md:w-2/5 bg-white">
          <LazyLoadImage
            src={hero_image}
            alt="hero image"
            className="px-10 md:p-0 object-contain object-center md:object-right max-h-[532px] w-full"
          />
        </div>
      </div>

      {/* partners */}
      <hr className="w-full md:w-1/2 my-3 border border-[#E5E6E6]" />

      <div className="flex flex-col items-center gap-4">
        <h4 className="text-center text-[#323433] text-2xl md:text-3xl font-semibold">
          Our Partners
        </h4>
        <div className="mx-auto overflow-x-scroll md:max-w-4/5 flex items-center justify-between gap-4 md:gap-16">
          {partners.map((partner) => (
            <LazyLoadImage
              src={partner}
              alt="partner"
              className="h-[50px] object-contain"
              key={partner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;
