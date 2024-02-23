import Banner from "./sections/Banner";
import CategoriesSection from "./sections/CategoriesSection";
import PopularItemsSection from "./sections/PopularItemsSection";
// import CategoriesProducts from "./sections/CategoriesProducts";

function Homepage() {
  return (
    <div>
      <Banner />
      <CategoriesSection />
      {/* <CategoriesProducts/> */}
      <PopularItemsSection />
    </div>
  );
}

export default Homepage;
