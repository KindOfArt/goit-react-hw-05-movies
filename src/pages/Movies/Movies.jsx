import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <MovieSearchForm setMovies={setMovies} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
