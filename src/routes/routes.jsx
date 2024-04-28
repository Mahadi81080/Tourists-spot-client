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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://tourists-spot-server.vercel.app/addSpot"),
      },
      {
        path: "/allSpot",
        element: (
          <PrivateRoutes>
            <AllSpot></AllSpot>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://tourists-spot-server.vercel.app/addSpot"),
      },
      {
        path: "myList",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://tourists-spot-server.vercel.app/addSpot"),
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
        element: (
          <PrivateRoutes>
            <AddSpot></AddSpot>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addSpot/:_id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://tourists-spot-server.vercel.app/addSpot"),
      },
      {
        path: "updatePost/:id",
        element: (
          <PrivateRoutes>
            <UpdatePost></UpdatePost>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://tourists-spot-server.vercel.app/addSpot/${params.id}`),
      },
    ],
  },
]);
export default router;
