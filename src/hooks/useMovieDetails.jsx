import { getMovieDetails } from 'API/moviesdbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useMovieDetails() {
  const { movieId } = useParams();
  const [state, setState] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setState);
  }, [movieId]);

  return [state, setState];
}
