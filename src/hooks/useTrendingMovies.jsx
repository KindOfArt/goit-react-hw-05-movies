import { getTrendingMovie } from 'API/moviesdbAPI';
import { useEffect, useState } from 'react';

export default function useTrendingMovies(defaultValue) {
  const [state, setState] = useState(defaultValue);

  const filter = array =>
    array
      .filter(({ media_type: mediaType }) => mediaType === 'movie')
      .map(({ id, title, release_date }) => ({ id, title, release_date }));

  useEffect(() => {
    getTrendingMovie().then(({ results }) => setState(filter(results)));
  }, []);

  return [state, setState];
}
