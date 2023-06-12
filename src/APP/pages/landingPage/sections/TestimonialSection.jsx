import TestimonialImg from "../../../../assets/images/testimonal_image.png";

function TestimonialSection() {
  const TestimonialData = [
    {
      text: "Working as an open source participant has been a great learning opportunity for me. I have learned from teh different roles and tasks I contributed to.",
      user: "Pamela Owino",
      vocation: "UX Designer, Kenya",
      img: TestimonialImg,
    },
    {
      text: "Working as an open source participant has been a great learning opportunity for me. I have learned from teh different roles and tasks I contributed to.",
      user: "Pamela Owino",
      vocation: "UX Designer, Kenya",
      img: TestimonialImg,
    },
    {
      text: "Working as an open source participant has been a great learning opportunity for me. I have learned from teh different roles and tasks I contributed to.",
      user: "Pamela Owino",
      vocation: "UX Designer, Kenya",
      img: TestimonialImg,
    },
    {
      text: "Working as an open source participant has been a great learning opportunity for me. I have learned from teh different roles and tasks I contributed to.",
      user: "Pamela Owino",
      vocation: "UX Designer, Kenya",
      img: TestimonialImg,
    },
    {
      text: "Working as an open source participant has been a great learning opportunity for me. I have learned from teh different roles and tasks I contributed to.",
      user: "Pamela Owino",
      vocation: "UX Designer, Kenya",
      img: TestimonialImg,
    },
  ];

  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#323433] my-4">
          What people are saying...
        </h1>
        <p className="sm:hidden md:block leading-relaxed text-base text-center pl-4 md:pl-2 text-[#323433]">
          Made by techies for techies. SpaceYaTech will allow you to accelerate
          your growth and <br /> free you from tutorial hell as per word on the
          street...
        </p>
      </div>

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
        {TestimonialData.map((testimonial, index) => (
          <figure
            key={index}
            className="flex flex-col w-[320px] sm:w-[480px] items-center justify-center p-2 sm:p-8  bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <blockquote className="px-2 text-gray-500 mb-10 md:px-8  dark:text-gray-400">
              <p className=" leading-relaxed text-base  pl-4 md:pl-2 text-[#323433]">
                {testimonial.text}
              </p>
            </blockquote>
            <figcaption className="w-4/5 flex items-center justify-between">
              <div className="text-left">
                <p>{testimonial.user}</p>
                <p className="font-bold text-neutral-900">
                  {testimonial.vocation}
                </p>
              </div>

              <img
                className="rounded-full w-12 h-12"
                src={testimonial.img}
                alt=""
              />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
