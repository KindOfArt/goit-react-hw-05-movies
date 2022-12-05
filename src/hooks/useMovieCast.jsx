import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieActors } from 'API/moviesdbAPI';

export default function useMovieCast(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieActors(movieId).then(({ cast }) => setState(cast));
  }, [movieId]);

  return [state, setState];
}
