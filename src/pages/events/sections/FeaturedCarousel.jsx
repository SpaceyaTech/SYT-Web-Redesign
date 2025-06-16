import { useEffect, useState } from "react";
import FeaturedEventCard from "./FeaturedEventCard";

export default function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="w-full h-96 md:h-[540px] hidden md:flex overflow-hidden relative">
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1.5 rounded-full z-10">
        <div className="flex gap-2">
          {Array.from({ length }).map((_, i) => (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/click-events-have-key-events
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={`block h-2 w-2 cursor-pointer rounded-full transition-all duration-700 ease-in-out ${
                activeIndex === i ? "bg-green-header" : "bg-gray-100"
              }`}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
            />
          ))}
        </div>
      </div>
      <div
        className="flex h-full transition-all duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {}
        {Array.from({ length }).map(() => (
          <div key={crypto.randomUUID()} className="w-full flex-shrink-0">
            <FeaturedEventCard key={crypto.randomUUID()} />
          </div>
        ))}
      </div>
    </div>
  );
}
