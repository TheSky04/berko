import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Products from "./pages/products";
import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";
import Stationary from "./products/Stationary";
import Packaging from "./products/Packaging";
import Textile from "./products/Textile";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:stationary", element: <Stationary /> },
        { path: "/products/:textile-consumables", element: <Textile /> },
        { path: "/products/:packaging-materials", element: <Packaging /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
