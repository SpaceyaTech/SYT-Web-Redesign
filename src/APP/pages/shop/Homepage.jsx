import Banner from "./sections/Banner";
import CategoriesSection from "./sections/CategoriesSection";
import PopularItemsSection from "./sections/PopularItemsSection";

function Homepage() {
  return (
    <div>
      <Banner />
      <CategoriesSection />
      <PopularItemsSection />
    </div>
  );
}

export default Homepage;
