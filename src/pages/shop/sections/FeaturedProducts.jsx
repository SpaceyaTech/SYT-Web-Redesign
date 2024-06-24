import { LandingWrapper } from "@/components";
import SectionWrapper from "@/components/shop/SectionWrapper";
import useEmblaCarousel from "embla-carousel-react";
import "./Banner/banner.css";
import { useCallback, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSwagList } from "@/hooks/Queries/shop/useSwagList";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { data: swagList, isSuccess } = useSwagList();
  const [viewportRef, embla] = useEmblaCarousel({ loop: false });

  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback((embla) => {
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);
  useEffect(() => {
    if (!embla) return;

    onScroll(embla);
    embla
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [embla, onScroll]);

  return (
    <LandingWrapper title="Featured Products">
      <SectionWrapper>
        <section className="w-full flex flex-col gap-4 px-3 ">
          <h3 className="text-green-header text-center font-semibold text-xl md:text-3xl mb-4">
            Our most popular products
          </h3>
        </section>
        <div className="embla h-full">
          <div
            className="embla__viewport rounded-2xl overflow-hidden h-full"
            ref={viewportRef}
          >
            <div className="embla__container h-full">
              {isSuccess &&
                swagList?.map((product) => (
                  <div
                    className="min-w-[100%] sm:min-w-[50%] md:min-w-[33%] pl-4  h-full"
                    key={product.id}
                  >
                    <Link
                      className="group relative"
                      to={`/shop/item/${product.id}`}
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <LazyLoadImage
                          src={product.image}
                          alt="Front of men&#039;s Basic Tee in black."
                          className="w-full h-60 object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-normal text-gray-700">
                            {product.name}
                          </h3>
                          <p className="text-base font-medium text-gray-700">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-8">
          <div className="embla__progress bg-green-dark/20 w-full md:w-[28rem] px-4 rounded-md h-1">
            <div
              className="embla__progress__bar bg-green-dark "
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </div>
        </div>
      </SectionWrapper>
    </LandingWrapper>
  );
};

export default FeaturedProducts;
