import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsYoutube } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";

export default function Navdar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <div className={styles.logolink}>
          <BsYoutube />
          <span className={styles.logoname}>Reactube</span>
        </div>
      </Link>
      <form className={styles.search}>
        <input type="text" placeholder="검색" className={styles.input} />
        <button className={styles.button}>
          <TfiSearch />
        </button>
      </form>
      <div></div>
    </nav>
  );
}
