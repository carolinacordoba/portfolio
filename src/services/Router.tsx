import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import NotFound from "../pages/NotFound";
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
        path: "/projekt",
        element: <Projects />,
      },
    ],
  },
]);
