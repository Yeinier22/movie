import React from "react";
import { MoviesGrid } from "./components/moviesGrid";
import styles from "./App.module.css";
import { Route, Link, Routes } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPages } from "./pages/LandingPages";

export function App() {
  return (
    <div>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </main>
    </div>
  );
}
