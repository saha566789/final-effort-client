import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"
import CreateShop from "../Pages/CreateShop/CreateShop";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layouts/DashBoard";
import TotalProduct from "../Pages/dashboard/TotalProduct/TotalProduct";
import Menu from "../Pages/dashboard/Menu/Menu";
import AllProduct from "../Pages/dashboard/AllProduct/AllProduct";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<ErrorPages></ErrorPages>,
      children:[
        {
            path:'/',
            element:<Home></Home>
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
            path:'/createShop',
           element:<PrivateRoutes><CreateShop></CreateShop></PrivateRoutes>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'/dashboard',
          element:<TotalProduct></TotalProduct>
        },
        {
          path:'/dashboard/menu',
          element:<Menu></Menu>
        },
        
      ]
    }
  ]);
  