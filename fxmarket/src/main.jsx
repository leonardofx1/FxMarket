import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { register } from "swiper/element/bundle";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"

register();

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Product /> },
      {path:'/admin', element:<Admin />},
      {path:'/login' , element:<Login />},
      {path:'/cadastro', element:<Cadastro />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
