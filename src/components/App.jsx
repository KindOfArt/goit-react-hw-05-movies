import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainNavigate from './MainNavigate/MainNavigate';
import Home from 'pages/Home/Home';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNavigate />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
