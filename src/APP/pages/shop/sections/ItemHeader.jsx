import SearchIcon from "../../../../assets/images/icons/search-icon.svg";
import CartIcon from "../../../../assets/images/icons/cart-icon.svg";

function ItemHeader({setShowDrawer}) {
  return (
      <div className="px-8 m-auto max-w-screen-2xl flex justify-between  md:space-x-48"> 
      {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className=" sm:w-1/2 hidden sm:flex items-center" > 
            <ol className="flex space-x-2">
                <li><a href="#" className="after:content-['>'] after:ml-2 text-[#656767] hover:text-[#009975]">Home</a></li>
                {/* <li><a href="#" className="after:content-['>'] after:ml-2 text-[#656767] hover:text-[#009975]">Item</a></li> */}
                <li className="text-[#009975]" aria-current="page">Item</li> 
            </ol>
        </nav>

      {/* Search box */}
        <div className="py-10 flex space-x-4 justify-between w-full sm:w-1/2">
          <label className="relative block w-full">
              <input className="placeholder:text-base placeholder:text-[#49454F] block w-full border border-[#49454F] rounded py-3 pl-9 pr-3 focus:outline-none focus:border-[#009975] focus:ring-[#009975] focus:ring-1 sm:text-sm" placeholder="Search products" type="text" name="search"/>
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 right-5 flex items-center pr-2">
              <img src={SearchIcon} alt="search"/>
              </span>
          </label>
          <button type="button" className="ml-6" onClick={setShowDrawer}><img src={CartIcon} alt="cart"/></button>
        </div>
    </div>
  )
}

export default ItemHeader