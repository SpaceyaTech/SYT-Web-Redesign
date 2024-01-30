/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import { createBrowserRouter } from "react-router-dom";

import {
  AboutUs,
  CommunityPage,
  LandingPage,
  Layout,
  Products,
  Blog,
  Blogs,
  EventsPage,
  IndividualChapter,
  Categories,
  DonatePage,
  Homepage,
  Resources,
  ProductDisplay,
  Checkout,
  SingleEvent,
  SingleProductDonation,
  Error500,
  Error404,
  Error400,
  Error403,
} from "../APP";
// import {
//   AllChaptersPage,
//   AdminLayout,
//   AllEventsPage,
//   AddChapterPage,
//   AddEventPage,
//   UpdateEventPage,
// } from "../ADMIN";
// import {
//   ForgotPassword,
//   LogIn,
//   ResetPassword,
//   SignUp,
//   Validate,
// } from "../AUTH";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:title_slug",
        element: <Blog />,
      },
      {
        path: "/allevents",
        element: <EventsPage />,
      },
      {
        path: "/chapter/:id",
        element: <IndividualChapter />,
      },
      {
        path: "/shop",
        element: <Homepage />,
      },
      {
        path: "/shop/category/:category",
        element: <Categories />,
      },
      {
        path: "/shop/item/:id",
        element: <ProductDisplay />,
      },
      {
        path: "/shop/checkout",
        element: <Checkout />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      // {
      //   path: "/donate",
      //   element: <DonatePage />,
      // },
      // {
      //   path: "/donate/:id",
      //   element: <SingleProductDonation />,
      // },
      {
        path: "/events/:id",
        element: <SingleEvent />,
      },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/login",
      //   element: <LogIn />,
      // },
    ],
  },
  {
    path: "/error-400",
    element: <Error400 />,
  },
  {
    path: "/error-403",
    element: <Error403 />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    path: "/error-500",
    element: <Error500 />,
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
  // {
  //   path: "/auth",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/auth/login",
  //       element: <LogIn />,
  //     },
  //     {
  //       path: "/auth/signup",
  //       element: <SignUp />,
  //     },
  //     {
  //       path: "/auth/validate",
  //       element: <Validate />,
  //     },
  //     {
  //       path: "/auth/forgot-password",
  //       element: <ForgotPassword />,
  //     },
  //     {
  //       path: "/auth/reset-password",
  //       element: <ResetPassword />,
  //     },
  //   ],
  // },
]);

export default router;
