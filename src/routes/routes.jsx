import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";
import AllSpot from "../Pages/AllSpot/AllSpot";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";

import MyList from "../Pages/MyList/MyList";
import UpdatePost from "../Components/UpdatePost";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addSpot"),
      },
      {
        path: "/allSpot",
        element: <PrivateRoutes><AllSpot></AllSpot></PrivateRoutes>,
        loader: () => fetch("http://localhost:5000/addSpot"),
      },
      {
        path: "myList",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/addSpot"),
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
        path: "/addSpot",
        element: <PrivateRoutes><AddSpot></AddSpot></PrivateRoutes>,
      },
      {
        path: "/addSpot/:_id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/addSpot"),
      },
      {
        path: "updatePost/:id",
        element: (
          <PrivateRoutes>
            <UpdatePost></UpdatePost>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addSpot/${params.id}`),
      },
    ],
  },
]);
export default router;
