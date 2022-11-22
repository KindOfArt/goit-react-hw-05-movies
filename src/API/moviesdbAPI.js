const API_KEY = '0bbd24b413be29f46c71430abd9cd165';
const baseUrl = 'https://api.themoviedb.org/3';

/* adult: false
backdrop_path: "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg"
genre_ids: (3) [28, 12, 878]
id: 505642
media_type: "movie"
original_language: "en"
original_title: "Black Panther: Wakanda Forever"
overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda."
popularity: 4248.617
poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
release_date: "2022-11-09"
title: "Black Panther: Wakanda Forever"
video: false
vote_average: 7.492
vote_count: 884
[[Prototype]]: Object 
5: 
adult: false
backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
genre_ids: (3) [28, 14, 878]
id: 436270
media_type: "movie"
original_language: "en"
original_title: "Black Adam"
overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
popularity: 17020.709
poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
release_date: "2022-10-19"
title: "Black Adam"
video: false
vote_average: 6.818
vote_count: 1262
[[Prototype]]: Object*/

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
