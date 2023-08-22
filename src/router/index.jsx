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
    ],
  },
]);

export default router;
