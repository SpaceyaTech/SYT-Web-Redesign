import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import SearchInput from "../../../components/shop/SearchInput";
import SectionWrapper from "../../../components/shop/SectionWrapper";
import SortItems from "../../../components/shop/SortItems";
import { useSwagCategory } from "@/hooks/Queries/shop/useSwagList";

function FilterSection() {
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
}

function Categories() {
  const { data, isSuccess } = useSwagCategory();
  return (
    <div className="flex  gap-4 flex-wrap ">
      {isSuccess &&
        data?.map((item) => (
          <CategoryItem
            key={crypto.randomUUID()}
            name={item.name}
            slug={item.slug}
          />
        ))}
    </div>
  );
}

function CategoryItem({ name, slug }) {
  const params = useParams();
  const category = params.category === slug;

  return (
    <Link
      to={`/shop/category/${slug}`}
      className={`rounded-3xl flex items-center border shadow-sm py-2 px-4 ${category ? "bg-green-dark" : " hover:bg-gray-500/20 "}`}
    >
      <p
        className={`text-sm capitalize ${category ? "text-white" : " hover:text-green-dark  text-gray-500"}`}
      >
        {name}
      </p>
    </Link>
  );
}

export default FilterSection;

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};
