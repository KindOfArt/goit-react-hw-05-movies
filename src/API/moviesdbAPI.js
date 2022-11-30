const API_KEY = '0bbd24b413be29f46c71430abd9cd165';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovie = () =>
  fetch(`${baseUrl}/trending/all/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .catch(err => console.log(err));

export const getMovieDetails = movieId =>
  fetch(`${baseUrl}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .catch(err => console.log(err));

export const getMovieActors = movieId =>
  fetch(`${baseUrl}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .catch(err => console.log(err));

export const getMovieReview = (movieId, page = 1) =>
  fetch(
    `${baseUrl}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  )
    .then(res => res.json())
    .catch(err => console.log(err));

export const searchMovies = (searchQuery, page = 1) =>
  fetch(
    `${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
  )
    .then(res => res.json())
    .catch(err => console.log(err));
