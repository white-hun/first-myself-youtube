import React from "react";
import { Link } from "react-router-dom";
import styles from "./Root.module.css";

export default function Navdar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">test home</Link>
      <Link to="/video">test page</Link>
    </nav>
  );
}
