import React, { useState } from "react";
import styles from "./SearchInput.module.css";
import { TfiSearch } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };
  return (
    <div>
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
    </div>
  );
}
