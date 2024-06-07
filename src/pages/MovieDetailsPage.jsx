import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, Routes, Route } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../api';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLink = location.state?.from || '/movies';
  
    useEffect(() => {
      getMovieDetails(movieId).then((data) => setMovie(data));
    }, [movieId]);
  
    if (!movie) return null;
  
    return (
      <div>
        <Link to={backLink}>Go back</Link>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
        />
        <nav>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </nav>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </div>
    );
  };
  
  export default MovieDetailsPage;