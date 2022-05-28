import styles from './Homepage.module.css';
import { fetchTrendingMovies } from 'services/movies-api-set';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList';

export function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <h1 className={styles.TrendingTitle}>Trending today</h1>
      <MoviesList movies={movies} to={'movies/'} />
    </div>
  );
}

export default Homepage;
