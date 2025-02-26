import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export const r = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/om-mig",
        element: <About />,
      },
      {
        path: "/projekt",
        element: <Projects />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
    ],
  },
]);
