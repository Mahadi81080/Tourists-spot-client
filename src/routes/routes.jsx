import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AddSpot from "../Pages/AddSpot/AddSpot";
import AllSpot from "../Pages/AllSpot/AllSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allSpot',
        element:<AllSpot></AllSpot>,
        loader:()=>fetch('http://localhost:5000/addSpot')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addSpot',
        element:<AddSpot></AddSpot>
      }
    ]
  },
]);
export default router;
