/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import { createBrowserRouter } from "react-router-dom";

import {
  AboutUs,
  Categories,
  CommunityPage,
  DonatePage,
  Homepage,
  LandingPage,
  Layout,
  Products,
  Resources,
  SingleItemPage,
  Checkout,
  SingleEvent,
  Blog,
  Blogs,
  EventsPage,
  SingleProductDonation,
  IndividualChapter,
  PageNotFound,
} from "../APP";
import {
  AllChaptersPage,
  AdminLayout,
  AllEventsPage,
  AddChapterPage,
  AddEventPage,
  UpdateEventPage,
} from "../ADMIN";
import {
  ForgotPassword,
  LogIn,
  ResetPassword,
  SignUp,
  Validate,
} from "../AUTH";

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
        path: "/shop",
        element: <Homepage />,
      },
      {
        path: "/shop/category/:category",
        element: <Categories />,
      },
      {
        path: "/shop/item/:id",
        element: <SingleItemPage />,
      },
      {
        path: "/shop/checkout",
        element: <Checkout />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/resources",
        element: <Resources />,
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
        path: "/donate",
        element: <DonatePage />,
      },
      {
        path: "/donate/:id",
        element: <SingleProductDonation />,
      },
      {
        path: "/events/:id", // New route path
        element: <SingleEvent />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AllChaptersPage />,
      },
      {
        path: "/admin/all-chapters",
        element: <AllChaptersPage />,
      },
      {
        path: "/admin/events",
        element: <AllEventsPage />,
      },
      {
        path: "/admin/add-chapters",
        element: <AddChapterPage />,
      },
      {
        path: "/admin/events",
        element: <AllEventsPage />,
      },
      {
        path: "/admin/events/add-event",
        element: <AddEventPage />,
      },
      {
        path: "/admin/events/update-event",
        element: <UpdateEventPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "/auth/login",
        element: <LogIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
      {
        path: "/auth/validate",
        element: <Validate />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
