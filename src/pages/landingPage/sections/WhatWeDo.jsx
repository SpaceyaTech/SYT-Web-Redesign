/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "../../../components";
import { whatWeDoData } from "../data";

function WhatWeDo() {
  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-8 pt-2">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        Getting into tech can be hard, but it doesn’t have to be
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-4 md:px-20 gap-5">
        {whatWeDoData.map((card, i) => (
          <WhatWeDoCard key={card.id} index={i} card={card} />
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;

function WhatWeDoCard({ card, index }) {
  const { title, description, image, link } = card;
  return (
    <div
      className={`border bg-white p-2 w-full rounded-2xl md:rounded-[20px] ${
        index === 0 && "lg:col-span-2"
      }`}
    >
      <div
        className={`bg-green-light rounded-lg md:rounded-xl size-full flex items-center justify-between flex-row p-3 sm:p-6 ${
          index === 0 && " md:py-20 md:gap-5"
        }`}
      >
        <div
          className={`flex-center md:flex-start flex-col p-3 sm:p-8 gap-3 ${
            index === 0 && "gap-4"
          }`}
        >
          <h4 className="text-green-header capitalize text-base md:text-xl font-semibold text-center md:text-start">
            {title}
          </h4>

          <p className="text-sm md:text-base font-normal text-center md:text-start">
            {description}
          </p>

          <Button link={link} title="View More" />
        </div>

        <LazyLoadImage
          effect="blur"
          src={image}
          alt={title}
          className={`${
            index === 0 ? "hidden md:flex" : "hidden"
          } md:size-52 lg:size-64 object-contain rounded-xl`}
        />
      </div>
    </div>
  );
}
