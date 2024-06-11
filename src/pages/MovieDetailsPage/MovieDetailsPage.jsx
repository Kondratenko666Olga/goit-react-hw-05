import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../../api';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className={styles.movieDetailsObj}>
      <Link className={styles.movieDetailsNavLink} to={backLinkLocationRef.current}>Go back</Link>
      <h1>{movie.title}</h1>
      <p className={styles.movieDetailsDescr}>{movie.overview}</p>
      <img className={styles.movieDetailsImg} src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <nav className={styles.movieDetailsNav}>
        <Link className={styles.movieDetailsNavLink} to="cast">Cast</Link>
        <Link className={styles.movieDetailsNavLink} to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
