import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

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
  // SingleEvent,
  Blogs,
  EventsPage,
} from "../APP";

const Loading = () => <div>Loading...</div>; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/community",
        element: (
          <Suspense fallback={<Loading />}>
            <CommunityPage />
          </Suspense>
        ),
      },
      {
        path: "/Gallery",
        element: (
          <Suspense fallback={<Loading />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/blogs/:titleSlug",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog2 />
          </Suspense>
        ),
      },
      {
        path: "/events",
        element: (
          <Suspense fallback={<Loading />}>
            <EventsPage />
          </Suspense>
        ),
      },
      // {
      //   path: "/events/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <SingleEvent />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/chapter/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <IndividualChapter />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<Loading />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/shop/category/:category",
        element: (
          <Suspense fallback={<Loading />}>
            <CategoriesProducts />
          </Suspense>
        ),
      },
      {
        path: "/shop/item/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDisplay />
          </Suspense>
        ),
      },
      {
        path: "/shop/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/resources",
        element: (
          <Suspense fallback={<Loading />}>
            <Resources />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loading />}>
            <LogIn />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<Loading />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <Suspense fallback={<Loading />}>
            <ResetPassword />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/error-400",
    element: (
      <Suspense fallback={<Loading />}>
        <Error400 />
      </Suspense>
    ),
  },
  {
    path: "/error-403",
    element: (
      <Suspense fallback={<Loading />}>
        <Error403 />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense fallback={<Loading />}>
        <Error404 />
      </Suspense>
    ),
  },
  {
    path: "/error-500",
    element: (
      <Suspense fallback={<Loading />}>
        <Error500 />
      </Suspense>
    ),
  },
]);

export default router;
