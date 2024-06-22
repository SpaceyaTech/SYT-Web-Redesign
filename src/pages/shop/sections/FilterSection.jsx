import SearchInput from "@/components/shop/SearchInput";
import SortItems from "@/components/shop/SortItems";

const FilterSection = () => {
  return (
    <div className="flex flex-col gap-4 my-4 w-full">
      <SearchInput />
      <div className="flex justify-between w-full">
        <Categories />
        <SortItems />
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex gap-4">
      <CategoryItem name="Hoodies" />
      <CategoryItem name="Hoodies" />
      <CategoryItem name="Hoodies" />
      <CategoryItem name="Hoodies" />
    </div>
  );
};

const CategoryItem = ({ name }) => {
  return (
    <button className="rounded-lg border shadow-sm py-2 px-4">
      <p className="text-sm text-gray-500">{name}</p>
    </button>
  );
};

export default FilterSection;
