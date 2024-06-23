import SearchInput from "@/components/shop/SearchInput";
import SectionWrapper from "@/components/shop/SectionWrapper";
import SortItems from "@/components/shop/SortItems";
import { Menu } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data";

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
      {categories.map((item, i) => (
        <CategoryItem key={i} name={item} />
      ))}
    </div>
  );
};

const CategoryItem = ({ name }) => {
  const params = useParams();
  const category = params.category === name;

  return (
    <Link
      to={`/shop/category/${name}`}
      className={`rounded-lg md:border md:shadow-sm py-2 px-4 ${category ? "bg-green-dark" : " hover:bg-gray-500/20 "}`}
    >
      <p
        className={`text-sm capitalize ${category ? "text-white" : " hover:text-green-dark  text-gray-500"}`}
      >
        {name}
      </p>
    </Link>
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
          {categories.map((item, i) => (
            <Menu.Item key={i}>
              <CategoryItem name={item} />
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default FilterSection;
