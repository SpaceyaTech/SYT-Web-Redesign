import video from "../../../../assets/products.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex lg:flex-row flex-col justify-end items-center">
      <div className="border border-gray-300 border-solid rounded-lg lg:w-2/3 lg:h-72 p-6 flex bg-[#E5EFEC] lg:absolute left-0 top-32">
        <div className="flex-1 flex flex-col gap-4 ml-6">
          <h4 className="text-[#009975] font-light lg:text-xl text-sm">
            Our Products
          </h4>

          <h2 className="lg:text-3xl text-base lg:font-normal font-semibold">
            Let us help you find talent &{" "}
            <br className="lg:inline-flex hidden" /> build your MVP
          </h2>

          <p className="text-sm font-extralight">
            Building better products, designing memorable{" "}
            <br className="lg:inline-flex hidden" />
            experiences, and creating meaningful{" "}
            <br className="lg:inline-flex hidden" />
            customer connections for global brands and
            <br className="lg:inline-flex hidden" />
            organizations acrpss Africa.
          </p>
        </div>

        <div className="flex-1 lg:inline-flex hidden" />
      </div>

      <div className="lg:h-[480px] lg:w-[59%] mt-12 rounded-lg lg:z-10 overflow-hidden">
        <video
          src={video}
          controls
          className="h-full w-fit"
          autoPlay={false}
          controlsList="nodownload"
          muted={true}
        />
      </div>
    </div>
  );
};

export default HeroSection;
