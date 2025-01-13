import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secrets from "../pages/Shared/Secret/Secrets";
import PrivateRoute from "./PrivateRoute";
import Dhashboard from "../Layout/Dhashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/All Users/AllUsers";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
 
  
  export const router = createBrowserRouter([
    {
      path: "/",
          element: <Main />,
          children: [
              {
                  path: '/',
                  element: <Home/>
            },
            {
              path: 'menu',
              element:<Menu/>
            },
            {
              path: 'order/:category',
              element:<Order/>
            },
            {
              path: '/login',
              element: <Login/>
            },
            {
              path: 'signup',
              element:<SignUp/>
            },
            {
              path: 'secret',
              element: <PrivateRoute>
                <Secrets/>
              </PrivateRoute>
            }
      ]
    },
    {
      path: 'dashboard',
      element:<PrivateRoute> <Dhashboard /></PrivateRoute>,
      children: [
      // normal user routes
        {
          path: 'cart',
          element:<Cart/>
        },



        // admin only routes routes
        {
          path: 'addItems',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageItems',
          element:<AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path: 'users',
          element:<AdminRoute><AllUsers/></AdminRoute>
        }
      ]
    }
  ]);