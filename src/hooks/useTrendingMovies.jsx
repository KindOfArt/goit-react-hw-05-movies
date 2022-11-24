import { getTrendingMovie } from 'API/moviesdbAPI';
import { useEffect, useState } from 'react';

export default function useTrendingMovies() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then(({ results }) =>
        results.filter(({ media_type }) => media_type === 'movie')
      )
      .then(setState);
  }, []);

  return [state, setState];
}
