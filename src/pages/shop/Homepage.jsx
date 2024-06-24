import CartIcon from "@/components/shop/CartIcon";
import SeoMetadata from "../../components/SeoMetadata";
import Banner from "./sections/Banner/index";
import CategoriesSection from "./sections/CategoriesSection";
import PopularItemsSection from "./sections/PopularItemsSection";
import FilterSection from "./sections/FilterSection";
import FaqSection from "./sections/FaqSection";
import CategoriesProducts from "./sections/CategoriesProducts";
import AllProducts from "./sections/AllProducts";
import FeaturedProducts from "./sections/FeaturedProducts";

function Homepage() {
  return (
    <>
      <SeoMetadata
        title="Shop"
        description="Elevate your style with our exclusive collection of merchandise."
        type="article"
        url="https://www.spaceyatech.com/shop"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
        siteName="SpaceYaTech Shop"
      />
      <div className="w-full">
        <CartIcon />
        <Banner />
        <FilterSection />
        <FeaturedProducts />
        <FaqSection />
        {/* <CategoriesSection /> */}
        {/* <PopularItemsSection /> */}
      </div>
    </>
  );
}

export default Homepage;
