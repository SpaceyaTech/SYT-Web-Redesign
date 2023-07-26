const ResourceCard = ({ resource }) => {
  const { header, desc, button, img } = resource;
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt={header} className="object-cover flex-2 w-full" />
      <div className="flex-1 p-6 flex flex-col items-center gap-4">
        <h4 className="text-xl leading-8 font-medium ">{header}</h4>
        <p className="text-center text-base font-light w-2/3">{desc}</p>
        <button className="py-3 px-8 border-2 border-solid border-[#009975] rounded-lg flex items-center justify-center text-sm text-[#009975] transition-all duration-300 ease-in hover:text-white hover:bg-[#009975]">
          {button}
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
