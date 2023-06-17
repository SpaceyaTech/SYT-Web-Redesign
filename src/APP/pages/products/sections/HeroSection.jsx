import video from "../../../../assets/products.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex justify-end">
      <div className="border border-gray-300 border-solid rounded-lg w-2/3 h-72 p-6 flex bg-[#E5EFEC] absolute left-0 top-20">
        <div className="flex-1 flex flex-col gap-4 ml-6">
          <h4 className="text-[#009975] font-light text-xl">Our Products</h4>

          <h2 className="text-3xl font-normal">
            Let us help you find talent & <br /> build your MVP
          </h2>

          <p className="text-sm font-extralight">
            Building better products, designing memorable <br />
            experiences, and creating meaningful <br />
            customer connections for global brands and
            <br />
            organizations acrpss Africa.
          </p>
        </div>

        <div className="flex-1" />
      </div>

      <div className="h-[480px] w-[59%]  rounded-lg z-10 overflow-hidden">
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
