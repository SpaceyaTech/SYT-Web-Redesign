import EmblaCarousel from "./Carousal";

function Banner() {
  return (
    <section className="m-4 p-2 rounded-3xl shadow-lg h-[80vh] w-full">
      <div className="rounded-2xl w-full h-full relative">
        <EmblaCarousel />
      </div>
    </section>
  );
}

export default Banner;
