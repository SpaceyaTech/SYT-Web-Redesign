import SearchInput from "@/components/shop/SearchInput";
import SectionWrapper from "@/components/shop/SectionWrapper";
import SortItems from "@/components/shop/SortItems";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data";

const FilterSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-end gap-4 md:justify-between w-full">
          <SearchInput />
          <div className="flex md:hidden">
            <SortItems />
          </div>
        </div>
        <div className="flex justify-start gap-4 md:justify-between w-full">
          <Categories />
          <div className="md:flex hidden">
            <SortItems />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Categories = () => {
  return (
    <div className="flex  gap-4 flex-wrap ">
      {categories.map((item, i) => (
        <CategoryItem key={i} name={item.name} />
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
      className={`rounded-3xl flex items-center border shadow-sm py-2 px-4 ${category ? "bg-green-dark" : " hover:bg-gray-500/20 "}`}
    >
      <p
        className={`text-sm capitalize ${category ? "text-white" : " hover:text-green-dark  text-gray-500"}`}
      >
        {name}
      </p>
    </Link>
  );
};

export default FilterSection;
