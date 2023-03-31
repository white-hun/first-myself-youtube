import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsYoutube } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";

export default function Navdar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logolink}>
          <BsYoutube />
          <span className={styles.logoname}>Reactube</span>
        </div>
      </Link>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="검색"
          value={search}
          onChange={handleChange}
        />
        <button className={styles.button}>
          <TfiSearch />
        </button>
      </form>
      <div></div>
    </nav>
  );
}
