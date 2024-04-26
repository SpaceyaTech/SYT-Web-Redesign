import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { NewHero } from "../../../../assets/images/community";
import JoinSYTModal from "./JoinSYTModal";

function WelcomeSection() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="py-16 flex items-center justify-center flex-col md:gap-10 max-w-1440 mx-auto">
      {/* Hero section Description */}
      <div className="px-3 md:px-0 max-w-[625px] flex flex-col items-center gap-4">
        <h1 className="md:text-[40px] text-2xl leading-tight  font-medium text-gray-900 text-center">
          A community{" "}
          <span className="text-primary">made for and by you to help you</span>
        </h1>

        <p className="text-sm md:text-xl font-normal leading-normal text-center">
          SpaceYaTech is a dynamic tech community fostering career growth for
          young professionals across all tech sectors, offering networking and
          learning opportunities for all career stages.
        </p>

        <button
          type="button"
          onClick={openModal}
          preventScrollReset
          className="text-white bg-gradient-to-b to-primary from-green-dark border-0 py-3 px-4 md:px-8 focus:outline-none rounded-lg text-sm md:text-base w-fit text-center"
        >
          Join SpaceYaTech
        </button>
      </div>
      <LazyLoadImage
        effect="blur"
        src={NewHero}
        alt="Hero"
        className="w-full h-[500px] object-cover"
      />

      <JoinSYTModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
}

export default WelcomeSection;
