import SearchInput from "@/components/shop/SearchInput";
import SectionWrapper from "@/components/shop/SectionWrapper";
import SortItems from "@/components/shop/SortItems";
import { Menu } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";

const FilterSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 w-full">
        <SearchInput />
        <div className="flex justify-end gap-4 md:justify-between w-full">
          <MobileCategories />
          <Categories />
          <SortItems />
        </div>
      </div>
    </SectionWrapper>
  );
};

const Categories = () => {
  return (
    <div className="hidden md:flex gap-4  ">
      <CategoryItem name="Hoodies" />
      <CategoryItem name="Hoodies" />
      <CategoryItem name="Hoodies" />
      <CategoryItem name="Hoodies" />
    </div>
  );
};

const CategoryItem = ({ name }) => {
  return (
    <button className="rounded-lg md:border md:shadow-sm py-2 px-4 hover:bg-gray-500/20">
      <p className="text-sm hover:text-green-dark  text-gray-500">{name}</p>
    </button>
  );
};

const MobileCategories = () => {
  return (
    <div className="flex md:hidden flex-col gap-4 relative bg-white">
      <Menu>
        <Menu.Button className="rounded-lg md:hidden border shadow-sm py-2 px-4  flex gap-2">
          <IoMenu size={20} className="text-gray-400 " />
          <p className="text-sm text-gray-500"> Categories</p>
        </Menu.Button>
        <Menu.Items
          anchor="bottom"
          className="absolute md:static top-10 z-10 right-0 w-48 py-1 px-2 bg-white rounded-md flex flex-col md:flex-row gap-2 border shadow-sm"
        >
          <Menu.Item>
            <CategoryItem name="Hoodies" />
          </Menu.Item>
          <Menu.Item>
            <CategoryItem name="Hoodies" />
          </Menu.Item>
          <Menu.Item>
            <CategoryItem name="Hoodies" />
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default FilterSection;
