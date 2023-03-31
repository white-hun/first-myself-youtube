import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import NotFound from "./pages/NotFound/NotFound";
import Root from "./pages/Root/Root";
import VideoDetail from "./pages/VideoDetail/VideoDetail";
import VideoHome from "./pages/VideoHome/VideoHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <VideoHome /> },
      { path: "/videos/:id", element: <VideoDetail /> }, // 동일화
      // {path: "", element: }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
