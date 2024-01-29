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
  // DonatePage,
  // Resources,
  // SingleEvent,
  // SingleProductDonation,
  //   AllChaptersPage,
  //   AdminLayout,
  //   AllEventsPage,
  //   AddChapterPage,
  //   AddEventPage,
  //   UpdateEventPage,
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
      //   path: "/events/:id", // New route path
      //   element: <SingleEvent />,
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
        path: "/signup",
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
