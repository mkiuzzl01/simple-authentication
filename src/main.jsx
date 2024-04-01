import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Sign_In from "./components/Sign_In/Sign_In";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Root from "./Layout/Root";
import Sign_Up from "./components/Sign_Up/Sign_Up";

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
        path:'/About',
        element:<About></About>,
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'/Sign_in',
        element:<Sign_In></Sign_In>
      },
      {
        path:'/Sign_up',
        element:<Sign_Up></Sign_Up>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
