import { MdAddShoppingCart } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";

const CartIcon = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-end ">
        <div className="w-14 md:w-16 h-14 md:h-16 rounded-full p-1 bg-white border shadow-lg cursor-pointer">
          <div className="flex w-full h-full rounded-full justify-center items-center bg-green-dark">
            <MdAddShoppingCart color="white" size={30} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default CartIcon;
