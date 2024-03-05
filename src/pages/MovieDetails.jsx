import { useParams } from "react-router";
import styles from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {
    setIsLoading(true)
    get("/movie/" + movieId).then((data) => {
        setIsLoading(false)
      setMovie(data);
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner />
  }

  if(!movie){
    return null;
  }

  const imageUrl = getMovieImg(movie.poster_path, 400);
  
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={styles.col + " " + styles.movieDetails}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
