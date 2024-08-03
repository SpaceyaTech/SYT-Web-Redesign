import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSwagList } from "../../../../hooks/Queries/shop/useSwagList";

function Carousel() {
  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { data: swagList, isSuccess } = useSwagList();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.offsetWidth + 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselRef.current]);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      });
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % swagList.length;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 10000); // Autoplay every 10 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, swagList]);

  return (
    <>
      <div className="relative h-full">
        <div
          ref={carouselRef}
          className="overflow-hidden w-full md:rounded-2xl h-full scrollbar-hide cursor-grab "
        >
          <div className="flex -ml-2.5 h-full">
            {isSuccess &&
              swagList?.map(({ image, name, id }) => (
                <div key={id} className="relative min-w-full pl-2.5 h-full">
                  <LazyLoadImage
                    className="w-full h-full md:rounded-2xl object-cover"
                    src={image}
                    alt={name}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
        <h2 className="text-white font-bold text-2xl lg:text-5xl">
          SpaceYaTech Hoodies
        </h2>
        <p className=" text-md md:text-lg text-white my-1">
          Buy out most stylish tech themed items
        </p>
        <p className="font-bold text-lg text-white">From KES 2,600</p>
        <Link
          to={`/shop/item/${isSuccess ? swagList[selectedIndex]?.id : ""} `}
          className="text-white font-bold bg-gradient-to-b to-primary from-green-dark py-3 px-4 mb-2 rounded-md"
        >
          Shop Now
        </Link>
        <div className="flex justify-center bg-black/60 rounded-3xl gap-3 px-2 py-1.5">
          {swagList?.map((_, index) => (
            <button
              key={crypto.randomUUID()}
              type="button"
              aria-label={`Slide ${index + 1}`}
              className={`cursor-pointer relative p-0 outline-none border-0 rounded-full h-[9px] w-[9px] ${index === selectedIndex ? " bg-green-dark" : "bg-white"}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
