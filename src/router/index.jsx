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
    ],
  },
]);

export default router;
