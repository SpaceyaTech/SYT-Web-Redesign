/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";

function InventoryCardComponent({
  title = "All Orders",
  number = 500,
  categories,
}) {
  return (
    <div className="flex  mt-5 ">
      <div className="flex w-full  p-[12px] ">
        <div className="flex w-full border-r-[1px] border-[#CBCDCC] pr-[12px]">
          <div className="grid w-full justify-start font-[600]">
            <span className=" text-[16px] text-[#475467]">{title}</span>
            <span className="text-[36px] -mt-1 text-[#4C4D4D]">{number}</span>
            {categories && (
              <div className=" mt-5 pr-4 pl-4 pt-2 pb-2 bg-[#F2F4F7] rounded-full">
                <p className=" text-[#344054]">{categories} Categories</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryCardComponent;

InventoryCardComponent.propTypes = {
  categories: PropTypes.number,
  number: PropTypes.number,
  title: PropTypes.string,
};
