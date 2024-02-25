import { useEffect, useState} from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hook/useQuery";

export function Search() {

    const query = useQuery();
    const search = query.get("search");

    useEffect(()=>{
        setsearchText(search || " ")
    },[search])

    const [searchText, setsearchText] = useState(" ");
    const history = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        history(`/?search=${searchText}`);
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" value={searchText} onChange={(e)=>setsearchText(e.target.value)}></input>
                <button className={styles.searchButton} type="submit"><FaSearch className={styles.search} size={20} /></button>
            </div>
        </form>
    )
}
