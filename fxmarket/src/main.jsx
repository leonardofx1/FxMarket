import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { register } from "swiper/element/bundle";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import useIsAdmin from "./firebase/firebaseUtils/isAdmin";
import Termos from "./pages/Termos";
import ProductDetails from "./pages/ProductDetails";

register();

const Root = () => {
  const isAdmin = useIsAdmin();

  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/produtos", element: <Product /> },
        {
          path: "/admin",
          element:
            isAdmin == null ? (
              <p>carregando</p>
            ) : isAdmin ? (
              <Admin />
            ) : (
              <Navigate to="/login" />
            ),
        },
        { path: "/login", element: <Login /> },
        { path: "/cadastro", element: <Cadastro /> },
        { path: "produto", element: <ProductDetails /> },
        { path: "/termos", element: <Termos /> },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
