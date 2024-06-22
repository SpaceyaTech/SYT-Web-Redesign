import { IoFilter } from "react-icons/io5";
import { Menu } from "@headlessui/react";

const SortItems = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <Menu>
        <Menu.Button className="rounded-lg border shadow-sm py-2 px-4 flex gap-2">
          <IoFilter size={20} className="text-gray-400" />
          <p className="text-sm text-gray-500"> Sort</p>
        </Menu.Button>
        <Menu.Items
          anchor="bottom"
          className="absolute top-10 z-10 right-0 w-48 bg-white py-2 px-4 rounded-md flex flex-col gap-2 border shadow-sm"
        >
          <Menu.Item>
            <div className="text-sm p-2 text-gray-500 cursor-pointer hover:text-green-dark">
              <p>Lowest price first</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="text-sm p-2 text-gray-500 cursor-pointer hover:text-green-dark">
              <p>Highest price first</p>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};
export default SortItems;
