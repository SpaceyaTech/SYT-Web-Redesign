import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";

function CartIcon() {
  const [cartProducts, setCartProducts] = useState(() => {
    // Initialize state with the value from localStorage if it exists
    const storedProducts = localStorage.getItem("swagList");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    // Event listener for storage changes in other tabs/windows
    const handleStorageChange = () => {
      const storedProducts = localStorage.getItem("swagList");
      setCartProducts(storedProducts ? JSON.parse(storedProducts) : []);
    };

    // Listen for "storage" events,  whenever swagList is updated from another tab
    window.addEventListener("storage", handleStorageChange);
    // Listen for custom swagListUpdated events, fired whenever swagList is updated
    window.addEventListener("swagListUpdated", handleStorageChange);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("swagListUpdated", handleStorageChange);
    };
  }, []);

  return (
    <SectionWrapper>
      <div className="flex justify-end relative">
        <div className="w-12 md:w-16 h-12 md:h-16 rounded-full p-0.5 md:p-1  bg-white border shadow-lg cursor-pointer">
          <div className="flex w-full h-full p-1.5 md:p-2 rounded-full justify-center items-center bg-green-dark">
            <MdAddShoppingCart color="white" className="h-full w-full" />
          </div>
          {cartProducts.length > 0 && (
            <div className="absolute bottom-0 right-0 bg-[#B3261E] text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
              <p>{cartProducts?.length}</p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
export default CartIcon;
