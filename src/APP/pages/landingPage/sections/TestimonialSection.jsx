import TestimonialImg from "../../../../assets/images/testimonal_image.png";
// import { twitter } from "../../../../assets/images/socials";
import regan from "../../../../assets/testimonialSection/regan_codes.jpeg";
import wayne from "../../../../assets/testimonialSection/wayne_gakuo.jpeg";
import aibunny from "../../../../assets/testimonialSection/ai_bunny.jpeg";
import wakio from "../../../../assets/testimonialSection/pithoneer.jpeg";
import tony from "../../../../assets/testimonialSection/tony_k.jpeg";
import singh from "../../../../assets/testimonialSection/singh.jpeg";
import harun from "../../../../assets/testimonialSection/juma_harun.jpeg";

function TestimonialSection() {
  const TestimonialData = [
    {
      text: "Thank you @SpaceYaTech. You guys are doing so much for the tech ecosystem in Kenya.",
      user: "Regan Muthomi",
      vocation: "Lead Data Science Instructor",
      img: regan,
      link: "https://twitter.com/regan_codes/status/1597655617375567872",
      company: "Africa Data School",
    },
    {
      text: "@SpaceYaTech's admin's mix of humor with informative texts is one thing I look forward to reading 😂🙌🏿. Great work admin 👏🏿.",
      user: "Wayne Gakuo",
      vocation: "Frontend Engineer",
      img: wayne,
      link: "https://twitter.com/wayne_gakuo/status/1661996704055406593",
      company: "Sky.Garden",
    },
    {
      text: "You are doing amazing things for the kenyan tech community 👏👏.",
      user: "Wakio Agness",
      vocation: "Software Engineer Student",
      img: wakio,
      link: "https://twitter.com/Pithoneer/status/1711647271987679246",
      company: "Alx Africa",
    },
    {
      text: "Stopping by to say I love this space.",
      user: "Tony Kipkemboi",
      vocation: "Developer Relations",
      img: tony,
      link: "https://twitter.com/tonykipkemboi/status/1712538360827490506",
      company: "Streamlit",
    },
    {
      text: "I had an awesome weekend courtesy to @Mentorlst and @SpaceYaTech.",
      user: "Fredrick Waihenya",
      vocation: "Back End Developer",
      img: aibunny,
      link: "https://twitter.com/TheAIbunny/status/1708796599793496129",
      company: "Hasibu Systems",
    },
    {
      text: "I just merged my first open-source pull request! 💪🏾I'm so excited to be a part of the community and contribute to making open-source software better.Thank you @SpaceYaTech and @Mentorlst for this awesome opportunity.💯",
      user: "Juma Harun",
      vocation: "Frontend Engineer",
      img: harun,
      link: "https://twitter.com/jumaH4run/status/1669785525480222721",
      company: "Freelance",
    },
    {
      text: "Hey @SpaceYaTech - kudos for all these spaces. Great work providing valuable insights on various tech skills 🙌.",
      user: "Mahati V Singh",
      vocation: "Global Tech Recruiter",
      img: singh,
      link: "https://twitter.com/MyAspirants/status/1715059439625986302",
      company: "JPMorgan Chase & Co",
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
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <blockquote className=" text-gray-500 mb-10 dark:text-gray-400">
                <p className=" leading-relaxed font-normal text-base text-[#323433]">
                  {testimonial.text}
                </p>
              </blockquote>
              <figcaption className=" flex items-center pl-4">
                <img
                  className="rounded-full w-20 h-20"
                  src={testimonial.img}
                  alt=""
                />
                <div className="text-left pl-8">
                  <p className="font-medium">{testimonial.user}</p>
                  <p className=" font-light text-neutral-900">
                    {testimonial.vocation} at
                    <br />{" "}
                    <span className="text-[#00664E] font-medium">
                      {testimonial.company}
                    </span>
                  </p>
                </div>
              </figcaption>
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
