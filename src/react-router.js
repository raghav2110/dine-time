import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutComponent from "./Components/AboutComponent";
import BodyComponent from "./Components/BodyComponent";
import ContactComponent from "./Components/ContactComponent";
import ErrorComponent from "./Components/ErrorComponent";
import RestaurantDetail from "./Components/RestaurantDetail";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/About",
        element: <AboutComponent />,
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
    ],
  },
]);
