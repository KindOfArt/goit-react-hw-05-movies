import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import MainNavigate from './MainNavigate/MainNavigate';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNavigate />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<>Movies cast</>} />
            <Route path="review" element={<>Moview review</>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
