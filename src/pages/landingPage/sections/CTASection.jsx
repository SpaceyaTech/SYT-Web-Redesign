import { useState } from "react";
import { bannerImg } from "../../../assets/images/hero-section";
import JoinSYTModal from "../../community/sections/JoinSYTModal";

function CTASection() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="bg-white w-full max-w-6xl mx-auto relative rounded-[20px] p-2">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4 absolute -top-6">
        <h2 className="mx-auto min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          one last bit
        </h2>
      </div>

      <div className="border rounded-2xl mx-auto bg-green-light px-4 py-8 sm:p-8 flex-between flex-col lg:flex-row gap-20">
        <img
          src={bannerImg}
          alt="banner"
          className="size-96 object-contain hidden md:flex"
        />

        <div className="flex-center flex-col lg:flex-start gap-4 md:pr-3">
          <h3 className="md:text-[40px] text-2xl leading-tight font-medium text-gray-900 text-center lg:text-start">
            Accelerating growth and potential of tech enthusiasts
          </h3>

          <p className="text-sm md:text-lg font-normal leading-normal text-center lg:text-start">
            SpaceYaTech is the fastest growing Africa, open-source community
            looking to change the way young Africans get started in technology.
          </p>

          <button
            type="button"
            aria-label="Join"
            onClick={openModal}
            className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
          >
            Join SpaceYaTech
          </button>
        </div>
      </div>

      <JoinSYTModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
}

export default CTASection;
