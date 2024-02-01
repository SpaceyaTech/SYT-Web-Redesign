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
  Homepage,
  ProductDisplay,
  ForgotPassword,
  LogIn,
  ResetPassword,
  SignUp,
  CategoriesProducts,
  Checkout,
  SingleEvent,
  Error500,
  Error404,
  Error400,
  Error403,
  GalleryPage,
} from "../APP";

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
        path: "/Gallery",
        element: <GalleryPage />,
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
        element: <CategoriesProducts />,
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
        path: "/events/:id", // New route path
        element: <SingleEvent />,
      },

      // {
      //   path: "/resources",
      //   element: <Resources />,
      // },
      // {
      //   path: "/donate",
      //   element: <DonatePage />,
      // },
      // {
      //   path: "/donate/:id",
      //   element: <SingleProductDonation />,
      // },
      // {

      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/login",
      //   element: <LogIn />,
      // },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
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
]);

export default router;
