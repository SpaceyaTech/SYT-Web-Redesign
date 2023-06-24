function Caroussel({ CarousselData }) {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <div
        className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto scrollbar-hide"
        style={{
          // display: "grid",
          // gap: "2rem",
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
          // overflowX: "auto",
        }}
      >
        {CarousselData.map(({ name, title, image }, index) => (
          <figure
            key={index}
            className="flex flex-col w-[320px] sm:w-[480px] items-center justify-center p-2 sm:p-8  bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            {/* <blockquote className="px-2 text-gray-500 mb-10 md:px-8  dark:text-gray-400">
              <p className=" leading-relaxed text-base  pl-4 md:pl-2 text-[#323433]">
                {testimonial.text}
              </p>
            </blockquote> */}
            <figcaption className="w-4/5 flex items-center justify-between">
              <div className="text-left">
                <p>{name}</p>
                <p className="font-bold text-neutral-900">{title}</p>
              </div>

              <img className="rounded-lg max-w-full h-auto" src={image} alt={name} />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Caroussel;
