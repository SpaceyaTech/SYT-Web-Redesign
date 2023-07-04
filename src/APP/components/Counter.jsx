function Counter({className}) {
  return (
    <div className={`flex rounded-lg ${className}`}>
        <button data-action="decrement" className="cursor-pointer outline-none w-20 border-y border-l border-l-[#323433] border-y-[#323433] rounded-l-full ">
            <span className=" text-base">−</span>
        </button>
        <p className="outline-none focus:outline-none font-medium  md:text-basecursor-default flex items-center justify-center border-y border-y-[#323433]" name="custom-input-number">1</p>
        <button data-action="increment" className="cursor-pointer outline-none w-20 border-y border-r border-r-[#323433] border-y-[#323433] rounded-r-full">
            <span className="text-base">+</span>
        </button>
    </div>
  )
}

export default Counter