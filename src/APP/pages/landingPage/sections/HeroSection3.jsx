import { Link } from "react-router-dom";
import { bannerImg } from "../../../../assets/images/hero-section";

const HeroSection3 = () => {
  return (
    <section className="p-4 md:p-10 border flex flex-col gap-2">
      {/* Hero Header */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-4">
        {/* hero desc */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="md:text-[40px] text-2xl leading-8 md:leading-normal font-medium text-gray-900 text-center md:text-left">
            Accelerate your <span className="text-[#009975]">growth</span> and
            unlock your potential in the tech ecosphere
          </h1>
          <p className="text-sm md:text-xl font-normal leading-relaxed text-center md:text-left">
            The fastest growing Africa, open-source community looking to change
            the way young Africans get started in technology.
          </p>

          <Link
            to="/community"
            className="text-white bg-[#009975] border-0 py-3 px-8 focus:outline-none rounded-lg text-lg w-full md:w-fit text-center"
          >
            Join the community
          </Link>
        </div>

        {/* hero img */}
        <div className="flex-1">
          <img src={bannerImg} alt="banner" className="" />
        </div>
      </div>

      {/* Partners */}
      <div className="">Partners</div>
    </section>
  );
};

export default HeroSection3;
