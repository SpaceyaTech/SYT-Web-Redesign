import Banner from "../sections/Banner";
import CategoriesSection from "../sections/CategoriesSection";
import PopularItemsSection from "../sections/PopularItemsSection";

function Homepage() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Banner />
      <CategoriesSection />
      <PopularItemsSection />
    </main>
  );
}

export default Homepage;
