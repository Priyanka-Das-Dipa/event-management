import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import Classes from "../classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=> fetch("/data.json")
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        loader: () => fetch("/blog.json")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/classes",
        element: <PrivateRoute><Classes></Classes></PrivateRoute>,
        loader: () => fetch('/classes.json')
      }
    ],
  },
]);
export default router;
