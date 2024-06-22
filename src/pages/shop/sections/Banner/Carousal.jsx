import { useState, useCallback, useEffect } from "react";
import banner from "../../../../assets/images/shop-page/shop-banner.jpg";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./banner.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot rounded-full h-[9px] w-[9px] ${selected ? " bg-green-dark" : "bg-white"}`}
    type="button"
    onClick={onClick}
  />
);

export default function EmblaCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const slides = Array.from(Array(5).keys());
  return (
    <>
      <div className="embla h-full">
        <div
          className="embla__viewport rounded-2xl overflow-hidden h-full"
          ref={viewportRef}
        >
          <div className="embla__container h-full">
            {slides.map((index) => (
              <div className="embla__slide  h-full" key={index}>
                <LazyLoadImage
                  className="w-full h-full rounded-2xl"
                  src={banner}
                  alt="banner"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
        <h2 className="text-white font-bold text-3xl lg:text-5xl">
          SpaceYaTech Hoodies
        </h2>
        <p className="text-lg text-white my-1">
          Buy out most stylish tech themed items
        </p>
        <p className="font-bold text-lg text-white">From KES 2,600</p>
        <button className="text-white font-bold bg-gradient-to-b to-primary from-green-dark py-3 px-4 mb-2 rounded-md">
          Shop Now
        </button>
        <div className="flex justify-center bg-black/60 rounded-3xl gap-3 px-2 py-1.5">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
