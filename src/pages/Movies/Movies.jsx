import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'API/moviesdbAPI';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get('q') ?? ''
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    searchMovies(searchQuery)
      .then(({ results }) =>
        results.map(({ id, title, release_date }) => ({
          id,
          title,
          release_date,
        }))
      )
      .then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <MovieSearchForm getQuery={setSearchQuery} />
      {movies.length > 0 ? <MoviesList movies={movies} /> : null}
    </>
  );
};

export default Movies;
