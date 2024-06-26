/* eslint-disable react/jsx-one-expression-per-line */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SYTHero } from "../../../assets/images/aboutPage";

function HeroSection() {
  return (
    <div className="px-4 sm:px-14 xl:px-28 sm:m-auto max-w-screen-2xl">
      <div className="flex flex-col md:flex-row items-center pt-10 gap-4">
        <div className="md:w-1/2">
          <h1 className="mb-2 md:text-[40px] leading-tight text-2xl font-medium text-gray-900">
            Empowering <span className="text-primary">innovation</span> in the{" "}
            <span className="text-primary">African tech space</span>
          </h1>
          <p className="text-sm md:text-xl font-normal">
            A community fostering innovation across African borders for tech
            enthusiasts. With memberships across Kenya, Tanzania, Nigeria and
            pockets of Africa, we aim to give life and let live to innovative
            ideas in the tech ecosphere.
          </p>
        </div>
        <div>
          <LazyLoadImage effect="blur" src={SYTHero} alt="space ya tech" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
