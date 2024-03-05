import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    setsearchText(search || "");
  }, [search]);

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    history(`/?search=${searchText}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          placeholder="Title"
          aria-label="Search"
          onChange={(e) => {
              const value = e.target.value;
              history(`/?search=${value}`);
          }}
        ></input>
          <FaSearch color="black" className={styles.searchButton} size={20} />
      </div>
    </form>
  );
}
