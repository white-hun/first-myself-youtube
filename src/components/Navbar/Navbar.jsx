import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsYoutube } from "react-icons/bs";
import SearchInput from "../SearchInput/SearchInput.jsx";

export default function Navdar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logolink}>
          <BsYoutube />
          <span className={styles.logoname}>Reactube</span>
        </div>
      </Link>
        <SearchInput />
      <div></div>
    </nav>
  );
}
