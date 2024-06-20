import banner from "../../../assets/images/shop-page/shop-banner.jpg";

function Banner() {
  return (
    <section
      className="flex items-center bg-cover bg-fixed bg-center bg-no-repeat h-[485px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="mx-auto text-center p-4">
        <h1 className=" text-xl sm:text-5xl text-center text-white font-medium">
          Elevate your style with our exclusive collection of
          <br className="hidden sm:contents" /> merchandise.
        </h1>

        <button
          type="button"
          className="text-xl font-semibold bg-white rounded py-3 px-8 w-full sm:w-64 mt-10 hover:bg-transparent hover:border hover:border-white hover:text-white"
        >
          Shop now
        </button>
      </div>
    </section>
  );
}

export default Banner;
