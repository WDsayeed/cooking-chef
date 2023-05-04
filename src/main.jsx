import React from "react";
import ReactDOM from "react-dom/client";
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home/Home/Home.jsx";
import Login from "./components/Login/Login/Login.jsx";
import Register from "./components/Login/register/Register.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import ChefDetails from "./components/Home/Home/Home/chefDetails/ChefDetails.jsx";
import Errorpage from "./components/ErrorPage/Errorpage.jsx";
import Blog from "./components/Blog/Blog.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://cooking-master-server-wdsayeed.vercel.app/chef/${params.id}`)
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
