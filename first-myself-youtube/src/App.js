import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Root from "./components/Root/Root";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/home", element: <Home /> },
      // {path: "", element: }
      // {path: "", element: }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
