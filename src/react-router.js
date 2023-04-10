import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BodyComponent from "./Components/BodyComponent";
import ContactComponent from "./Components/ContactComponent";
import ErrorComponent from "./Components/ErrorComponent";
import RestaurantDetail from "./Components/RestaurantDetail";
import Shimmer from "./Components/Shimmer";
import CartComponent from "./Components/CartComponent";
const InstaMart = lazy(() => import("./Components/Instamart"));
const AboutComponent = lazy(() => import("./Components/AboutComponent"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <AboutComponent />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <ContactComponent />,
      },
      {
        path: "/Home",
        element: <BodyComponent />,
      },
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantDetail />,
      },
      {
        path: "/InstaMart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/CartComponent",
        element: <CartComponent />,
      },
    ],
  },
]);
