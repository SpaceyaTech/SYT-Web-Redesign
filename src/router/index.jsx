import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy FallbackLoader components
import {
  AboutUs,
  CommunityPage,
  LandingPage,
  Layout,
  Products,
  Blog2,
  CategoriesProducts,
  Checkout,
  Error400,
  Error403,
  Error404,
  Error500,
  ForgotPassword,
  GalleryPage,
  Homepage,
  IndividualChapter,
  LogIn,
  ProductDisplay,
  ResetPassword,
  Resources,
  SignUp,
  SingleEvent,
  Blogs,
  EventsPage,
} from "../APP";
import { FallbackLoader } from "../APP/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FallbackLoader />}>
        <Layout />
      </Suspense>
    ),
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
            <Blog2 />
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
        path: "/chapter/:id",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <IndividualChapter />
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
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       path: "/admin",
  //       element: <AllChaptersPage />,
  //     },
  //     {
  //       path: "/admin/all-chapters",
  //       element: <AllChaptersPage />,
  //     },
  //     {
  //       path: "/admin/events",
  //       element: <AllEventsPage />,
  //     },
  //     {
  //       path: "/admin/add-chapters",
  //       element: <AddChapterPage />,
  //     },
  //     {
  //       path: "/admin/events",
  //       element: <AllEventsPage />,
  //     },
  //     {
  //       path: "/admin/events/add-event",
  //       element: <AddEventPage />,
  //     },
  //     {
  //       path: "/admin/events/update-event",
  //       element: <UpdateEventPage />,
  //     },
  //   ],
  // },
]);

export default router;
