import { createBrowserRouter } from "react-router";
import NavLayout from "./navLayout";
import Home from "../pages/home";
import AuthRoutes from "./authRoutes";

const routes = createBrowserRouter([
  {
    path: "",
    element: <NavLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/auth",
        element: <AuthRoutes />,
      },
    ],
  },
]);

export default routes;
