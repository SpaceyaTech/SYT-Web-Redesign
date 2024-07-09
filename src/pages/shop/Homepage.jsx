import SeoMetadata from "../../components/SeoMetadata";
import Banner from "./sections/Banner";
import CategoriesSection from "./sections/CategoriesSection";
import PopularItemsSection from "./sections/PopularItemsSection";
// import CategoriesProducts from "./sections/CategoriesProducts";

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
      <div>
        <Banner />
        <CategoriesSection />
        {/* <CategoriesProducts/> */}
        <PopularItemsSection />
      </div>
    </>
  );
}

export default Homepage;
