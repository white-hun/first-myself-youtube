import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import VideoHome from "./components/VideoHome/VideoHome";
import NotFound from "./pages/NotFound/NotFound";
import Root from "./pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/home", element: <VideoHome /> },
      // {path: "", element: }
      // {path: "", element: }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
