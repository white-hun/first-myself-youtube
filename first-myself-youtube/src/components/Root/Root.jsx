import React from "react";
import { Outlet } from "react-router-dom";
import Navdar from "../Navbar/Navbar";

export default function Root() {
  return (
    <>
      <Navdar />
      <Outlet />
    </>
  );
}
