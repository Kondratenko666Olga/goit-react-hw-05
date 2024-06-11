import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api'; // Імпорт з правильним шляхом
import MovieList from '../../components/MovieList';
import styles from './MoviesPage.module.css'; // Додавання стилів

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then((data) => setMovies(data.results));
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.query.value;
    setSearchParams({ query: inputValue });
  };

  return (
    <div className={styles.searchMovies}>
      <form onSubmit={handleSearch} className={styles.searchMoviesForm}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;