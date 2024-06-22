import SectionWrapper from "@/components/shop/SectionWrapper";
import EmblaCarousel from "./Carousal";

function Banner() {
  return (
    <SectionWrapper>
      <section className="mb-8 p-2 rounded-3xl shadow-lg h-[60vh] lg:h-[80vh] w-full">
        <div className="rounded-2xl w-full h-full relative">
          <EmblaCarousel />
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Banner;
