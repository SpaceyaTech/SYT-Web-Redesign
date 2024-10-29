import { MdAddShoppingCart } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";

function CartIcon() {
  return (
    <SectionWrapper>
      <div className="flex justify-end relative">
        <div className="w-12 md:w-16 h-12 md:h-16 rounded-full p-0.5 md:p-1  bg-white border shadow-lg cursor-pointer">
          <div className="flex w-full h-full p-1.5 md:p-2 rounded-full justify-center items-center bg-green-dark">
            <MdAddShoppingCart color="white" className="h-full w-full" />
          </div>
          <div className="absolute bottom-0 right-0 bg-[#B3261E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            <p className="text-white font-medium">1</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
export default CartIcon;
