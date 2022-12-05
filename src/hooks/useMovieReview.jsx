import { getMovieReview } from 'API/moviesdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useMovieReview(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReview(movieId).then(({ results }) => setState(results));
  }, [movieId]);

  return [state, setState];
}
