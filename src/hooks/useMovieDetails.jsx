import { getMovieDetails } from 'API/moviesdbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useMovieDetails(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(details => setState(details));
  }, [movieId]);

  return [state, setState];
}
