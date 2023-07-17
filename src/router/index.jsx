import { createBrowserRouter } from "react-router-dom";

import {
  Homepage,
  LandingPage,
  Layout,
  Products,
  Resources,
  SingleItemPage,
  Checkout,
} from "../APP";
import AboutUs from "../APP/pages/aboutUs/AboutUs";
import CommunityPage from "../APP/pages/community/CommunityPage";
import DonatePage from "../APP/pages/donate/DonatePage";


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
    ],
  },


]);

export default router;
