import useMovieDetails from 'hooks/useMovieDetails';

import { NavLink, Outlet } from 'react-router-dom';

const MovieDetails = props => {
  const [movieDetails] = useMovieDetails();

  console.log(movieDetails);

  return (
    <>
      <h1>MOVIE ID</h1>
      <main>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="review">Review</NavLink>
        <Outlet />
      </main>
    </>
  );
};

export default MovieDetails;

/*
adult: false
backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
belongs_to_collection: null
budget: 200000000
genres: (3) [{…}, {…}, {…}]
homepage: "https://www.dc.com/BlackAdam"
id: 436270
imdb_id: "tt6443346"
original_language: "en"
original_title: "Black Adam"
overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
popularity: 21272.277
poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
production_companies: (4) [{…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2022-10-19"
revenue: 368000000
runtime: 125
spoken_languages: (2) [{…}, {…}]
status: "Released"
tagline: "The world needed a hero. It got Black Adam."
title: "Black Adam"
video: false
vote_average: 7.155
vote_count: 1677
*/
