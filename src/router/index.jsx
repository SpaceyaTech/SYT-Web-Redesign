import { createBrowserRouter } from "react-router-dom";

//pages imports
import LandingPage from "../APP/pages/landingPage/LandingPage";
import Homepage from "../APP/pages/shop/pages/Homepage";
import SingleItemPage from "../APP/pages/shop/pages/SingleItemPage";
import Shop from "../APP/pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  //shop routes
  {
    element: <Shop />,
    children: [
      {
        path: "/shop",
        element: <Homepage />,
      },
      {
        path: "/shop/item/:id",
        element: <SingleItemPage />,
      },
    ],
  },
]);

export default router;
