import CartIcon from "@/components/shop/CartIcon";
import SeoMetadata from "../../components/SeoMetadata";
import Banner from "./sections/Banner/index";
import FilterSection from "./sections/FilterSection";
import FaqSection from "./sections/FaqSection";
import FeaturedProducts from "./sections/FeaturedProducts";
import NewProducts from "./sections/NewProducts";

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
      <div className="w-full bg-[#f3f4f5]">
        <div className="hidden md:flex justify-end">
          <CartIcon />
        </div>
        <Banner />
        <FilterSection />
        <FeaturedProducts />
        <NewProducts />
        <FaqSection />
      </div>
    </>
  );
}

export default Homepage;
