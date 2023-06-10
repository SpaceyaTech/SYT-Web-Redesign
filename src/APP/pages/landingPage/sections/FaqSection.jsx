import FAQ from "../../../components/FAQ";
/* eslint-disable react/no-unescaped-entities */
function FaqSection() {
  return (
    <section className="bg-[#00664E] body-font mx-auto w-full max-w-screen-2xl">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-[#BDF16D] tracking-widest font-medium title-font mb-1">
            Got questions?
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Frequently Asked Questions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xs md:text-sm text-white py-3">
            Whether you're a newcomer looking to learn more about our platform
            or a seasoned member in need of a refresher, we've got you covered.
          </p>
        </div>
        <FAQ/>
      </div>
    </section>
  );
}

export default FaqSection;
