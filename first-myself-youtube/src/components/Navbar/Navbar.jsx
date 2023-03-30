import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navdar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">test home</Link>
    </nav>
  );
}
