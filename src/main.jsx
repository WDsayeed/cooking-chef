import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home/Home/Home.jsx";
import Login from "./components/Login/Login/Login.jsx";
import Register from "./components/Login/register/Register.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import ChefDetails from "./components/Home/Home/Home/chefDetails/ChefDetails.jsx";
import Errorpage from "./components/ErrorPage/Errorpage.jsx";

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
        element:<ChefDetails></ChefDetails>,
        // loader: ()=> fetch("http://localhost:5000/chef")
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
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
