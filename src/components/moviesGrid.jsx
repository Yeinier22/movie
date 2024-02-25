import styles from "./moviesGrid.module.css";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useLocation } from "react-router";
import React from "react";
import { useQuery } from "../hook/useQuery";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setisLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
