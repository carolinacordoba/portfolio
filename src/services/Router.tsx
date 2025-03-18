import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import CV from "../pages/CV";
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
        path: "/digitalt-cv",
        element: <CV />,
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
