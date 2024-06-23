/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { lazy } from "react";

const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const AllBlogsPage = lazy(() => import("./pages/admin/blogs/AllBlogsPage"));
const AddChapterPage = lazy(
  () => import("./pages/admin/chapters/AddChapterPage")
);
const AllChaptersPage = lazy(
  () => import("./pages/admin/chapters/AllChaptersPage")
);
const AddEventPage = lazy(() => import("./pages/admin/events/AddEventPage"));
const AllEventsPage = lazy(() => import("./pages/admin/events/AllEventsPage"));
const UpdateEventPage = lazy(
  () => import("./pages/admin/events/UpdateEventPage")
);
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const LogIn = lazy(() => import("./pages/auth/LogIn"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Blog2 = lazy(() => import("./pages/blog2/Blog2"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const IndividualChapter = lazy(
  () => import("./pages/chapter/pages/IndividualChapter")
);
const CommunityPage = lazy(() => import("./pages/community/CommunityPage"));
const SingleEvent = lazy(
  () =>
    import("./pages/community/sections/eventsPreview/SingleEvents/SingleEvent")
);
const DonatePage = lazy(() => import("./pages/donate/DonatePage"));
const SingleProductDonation = lazy(
  () => import("./pages/donate/pages/SingleProductDonatePage")
);
const Error400 = lazy(() => import("./pages/errorPages/Error400"));
const Error403 = lazy(() => import("./pages/errorPages/Error403"));
const Error404 = lazy(() => import("./pages/errorPages/Error404"));
const Error500 = lazy(() => import("./pages/errorPages/Error500"));
const ErrorBoundary = lazy(() => import("./pages/errorPages/ErrorBoundary"));
const EventsPage = lazy(() => import("./pages/events/pages/EventsPage"));
const EventsSection = lazy(
  () => import("./pages/events/sections/eventsSection/EventsSection")
);
const GalleryPage = lazy(() => import("./pages/gallery/GalleryPage"));
const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const Layout = lazy(() => import("./pages/Layout"));
const Products = lazy(() => import("./pages/products2/Products"));
const Resources = lazy(() => import("./pages/resources/Resources"));
const Homepage = lazy(() => import("./pages/shop/Homepage"));
const Checkout = lazy(() => import("./pages/shop/OrderSummaryPage"));
const ProductDisplay = lazy(() => import("./pages/shop/ProductDisplayPage"));
const CategoriesProducts = lazy(
  () => import("./pages/shop/sections/CategoriesProducts")
);
const AllProducts = lazy(() => import("./pages/shop/sections/AllProducts"));
const SingleItemPage = lazy(() => import("./pages/shop/SingleItemPage"));

const ShopDashboard = lazy(() => import("./pages/admin/shop/ShopDashboard"));

export {
  AllProducts,
  AboutUs,
  AddChapterPage,
  AddEventPage,
  AdminLayout,
  AllBlogsPage,
  AllChaptersPage,
  AllEventsPage,
  Blog,
  Blog2,
  Blogs,
  CategoriesProducts,
  Checkout,
  CommunityPage,
  DonatePage,
  Error400,
  Error403,
  Error404,
  Error500,
  ErrorBoundary,
  EventsPage,
  EventsSection,
  ForgotPassword,
  GalleryPage,
  Homepage,
  IndividualChapter,
  LandingPage,
  Layout,
  LogIn,
  ProductDisplay,
  Products,
  ResetPassword,
  Resources,
  ShopDashboard,
  SignUp,
  SingleEvent,
  SingleItemPage,
  SingleProductDonation,
  UpdateEventPage,
};
