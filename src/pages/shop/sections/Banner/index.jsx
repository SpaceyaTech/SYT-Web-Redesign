import Caroussel from "./Caroussel";

function Banner() {
  return (
    <section className="md:px-10 lg:px-20">
      <div className="mb-8 md:p-2 md:rounded-3xl md:shadow-lg h-[60vh] lg:h-[80vh] w-full">
        <div className="md:rounded-2xl w-full h-full relative">
          <Caroussel />
        </div>
      </div>
    </section>
  );
}

export default Banner;
