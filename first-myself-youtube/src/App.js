import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import NotFound from "./pages/NotFound/NotFound";
import Root from "./pages/Root/Root";
import VideoDetail from "./pages/VideoDetail/VideoDetail";
import VideoHome from "./pages/VideoHome/VideoHome";
import VideoSearch from "./pages/VIdeoSearch/VideoSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <VideoHome /> },
      { path: "/videos/:search", element: <VideoSearch /> },
      { path: "/watch/:etag", element: <VideoDetail /> }, // 동일화
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
