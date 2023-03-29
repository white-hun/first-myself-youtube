import React from "react";
import { Outlet } from "react-router-dom";
import Navdar from "./Navbar";

export default function Root() {
  return (
    <div>
      <Navdar />
      <Outlet />
    </div>
  );
}
