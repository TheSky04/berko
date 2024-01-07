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
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout isMobile={isMobile} />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home isMobile={isMobile} /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/products", element: <Products /> },
        {
          path: "/products/:stationary",
          element: <Stationary isMobile={isMobile} />,
        },
        {
          path: "/products/:textile-consumables",
          element: <Textile isMobile={isMobile} />,
        },
        {
          path: "/products/:packaging-materials",
          element: <Packaging isMobile={isMobile} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
