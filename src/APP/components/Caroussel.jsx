import { LazyLoadImage } from "react-lazy-load-image-component";

function Caroussel({ CarousselData }) {
  return (
    <section className="pt-4 sm:pt-16 pb-10 mx-auto w-full max-w-screen-2xl pl-4 lg:pl-14 xl:pl-28">
      <div
        className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto scrollbar-hide"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {CarousselData.map(({ name, title, image }, index) => (
          <div
            key={index}
            className="relative after:block after:relative after:-mt-36 after:h-36 after:w-full after:content-[''] after:z-0 after:rounded-b-2xl after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_29.17%,_rgba(0,0,0,0.94)_97.92%)]"
          >
            <LazyLoadImage
              className="rounded-2xl w-[300px] h-[300px] object-cover items-center"
              src={image}
              alt={name}
            />
            <div className="absolute -translate-x-2/4 -translate-y-1/4 left-2/4 top-3/4 text-white text-center z-10 font-medium w-4/5">
              <p className="pb-2 text-xl">{name}</p>
              <p className="text-base">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Caroussel;
