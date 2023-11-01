import { podImage1 } from "../../assets/images/podcast";

function PodcastCard({ img, cat = "Podcast", title, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[95vw] md:w-[520px] h-[520px] rounded-md overflow-hidden relative">
        <img src={img} alt="podcast" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black opacity-20 h-1/3" />

        <div className="absolute bottom-0 left-0 right-0 text-white flex flex-col gap-3 p-6">
          <h5 className="text-[#009975] font-medium text-sm capitalize">
            {cat}
          </h5>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="font-normal text-base">{desc}</p>
        </div>
      </div>
    </a>
  );
}

export default PodcastCard;
