import { createBrowserRouter } from "react-router-dom";

import {
  Blog,
  Homepage,
  LandingPage,
  Layout,
  Products,
  Resources,
  SingleItemPage,
} from "../APP";
import AboutUs from "../APP/pages/aboutUs/AboutUs";
import CommunityPage from "../APP/pages/community/CommunityPage";
import DonatePage from "../APP/pages/donate/DonatePage";
import Categories from "../APP/pages/shop/pages/Categories";

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
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
