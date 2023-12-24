import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Communication from "./pages/communication";
import Products from "./pages/products";
import AppLayout from "./ui/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/communication", element: <Communication /> },
        { path: "/products", element: <Products /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
