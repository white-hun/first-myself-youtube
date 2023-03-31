import React from "react";
import { Outlet } from "react-router-dom";
import Navdar from "../../components/Navbar/Navbar";
import VideoHome from "../VideoHome/VideoHome";

export default function Root() {
  return (
    <>
      <Navdar />
      <Outlet />
    </>
  );
}
