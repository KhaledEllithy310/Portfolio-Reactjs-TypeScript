import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Portfolio from "./../Pages/portfolio/portfolio";
import ContactUs from "../Pages/ContactUs/ContactUs";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <ContactUs /> },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
