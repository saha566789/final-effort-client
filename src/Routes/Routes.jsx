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

import UpdateProduct from "../Pages/dashboard/Update/UpdateProduct";
import ProductSection from "../Pages/dashboard/ProductSection/ProductSection";
import CheckOut from "../Pages/dashboard/checkOut/CheckOut";
import AllUsers from "../Pages/dashboard/allUsers/AllUsers";
import ManagerRoutes from "./ManagerRoutes";
import Subscription from "../Pages/dashboard/subscribtion/Subscription";
import Payment from "../Pages/dashboard/Payment/Payment";
import SalesCollection from "../Pages/dashboard/SalesCollection/SalesCollection";
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
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children:[
        {
          path:'/dashboard',
          element:<ManagerRoutes><TotalProduct></TotalProduct></ManagerRoutes>
        },
        {
          path:'/dashboard/menu',
          element:<ManagerRoutes><Menu></Menu></ManagerRoutes>
        },
        {
          path:'/dashboard/allProduct',
          element:<ManagerRoutes><ProductSection></ProductSection></ManagerRoutes>
        },
        {
          path: 'updateItem/:id',
          element: <ManagerRoutes><UpdateProduct></UpdateProduct></ManagerRoutes>,
          // loader: ({params}) => fetch(`https://final-effort-server-pi.vercel.app/menu/${params.id}`)
        },
        {
          path:'checkOut',
          element:<ManagerRoutes><CheckOut></CheckOut></ManagerRoutes>
        },
        {
          path:'subscription',
          element:<Subscription></Subscription>
        },
        {
        path:'/dashboard/users',
        element:<AllUsers></AllUsers>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
       
        },
        {
          path:'sales',
          element:<SalesCollection></SalesCollection>
        }
      ]
    }
  ]);
  