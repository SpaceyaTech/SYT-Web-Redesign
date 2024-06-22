import { MdAddShoppingCart } from "react-icons/md";

const CartIcon = () => {
  return (
    <div className="pt-2 md:pt-4 flex justify-end">
      <div className="w-14 md:w-16 h-14 md:h-16 rounded-full p-1 bg-white border shadow-lg cursor-pointer">
        <div className="flex w-full h-full rounded-full justify-center items-center bg-green-dark">
          <MdAddShoppingCart color="white" size={30} />
        </div>
      </div>
    </div>
  );
};
export default CartIcon;
