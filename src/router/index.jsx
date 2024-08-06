import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy FallbackLoader components
import {
  AboutUs,
  AdminLayout,
  AllProducts,
  Blog,
  Blogs,
  CategoriesProducts,
  Checkout,
  CommunityPage,
  Error400,
  Error403,
  Error404,
  Error500,
  EventsPage,
  ForgotPassword,
  GalleryPage,
  Homepage,
  LandingPage,
  Layout,
  LogIn,
  ProductDisplay,
  Products,
  ResetPassword,
  Resources,
  ShopDashboard,
  ShopSales,
  SignUp,
  SingleEvent,
} from "..";
import { FallbackLoader } from "../components";
import EditForm from "@/pages/admin/shop/EditForm";
import SinglePageView from "@/pages/admin/shop/SinglePageView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/community",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <CommunityPage />
          </Suspense>
        ),
      },
      {
        path: "/Gallery",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/:titleSlug",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/events",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <EventsPage />
          </Suspense>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <SingleEvent />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/shop/items",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <AllProducts />
          </Suspense>
        ),
      },
      {
        path: "/shop/category/:category",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <CategoriesProducts />
          </Suspense>
        ),
      },
      {
        path: "/shop/item/:id",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <ProductDisplay />
          </Suspense>
        ),
      },
      {
        path: "/shop/checkout",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/resources",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Resources />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <LogIn />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <ResetPassword />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/shop",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <ShopDashboard />
          </Suspense>
        ),
      },
      {
        path: "/admin/shop/sales",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <ShopSales />
          </Suspense>
        ),
      },
      // {
      //   path: "/admin",
      //   element: <AllChaptersPage />,
      // },
      // {
      //   path: "/admin/all-chapters",
      //   element: <AllChaptersPage />,
      // },
      // {
      //   path: "/admin/events",
      //   element: <AllEventsPage />,
      // },
      // {
      //   path: "/admin/add-chapters",
      //   element: <AddChapterPage />,
      // },
      // {
      //   path: "/admin/events",
      //   element: <AllEventsPage />,
      // },
      // {
      //   path: "/admin/events/add-event",
      //   element: <AddEventPage />,
      // },
      // {
      //   path: "/admin/events/update-event",
      //   element: <UpdateEventPage />,
      // },
    ],
  },
  {
    path: "/admin/shop/edit",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <EditForm />
      </Suspense>
    ),
  },
  {
    path: "/admin/shop/singleitem",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <SinglePageView />
      </Suspense>
    ),
  },
  {
    path: "/error-400",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <Error400 />
      </Suspense>
    ),
  },
  {
    path: "/error-403",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <Error403 />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <Error404 />
      </Suspense>
    ),
  },
  {
    path: "/error-500",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <Error500 />
      </Suspense>
    ),
  },
]);

export default router;
