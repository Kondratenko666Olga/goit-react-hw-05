import { useState } from 'react';
import { searchMovies } from '../../api';
import MovieList from '../../components/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query).then(data => setMovies(data.results));
  };

  return (
    <div className={styles.searchMovies}>
      <h1>Search Movies</h1>
      <form className={styles.searchMoviesForm} onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
