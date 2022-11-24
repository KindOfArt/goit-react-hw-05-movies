import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Home from 'pages/Home/Home';
import MainNav from './MainNav/MainNav';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<>Cast</>} />
            <Route path="review" element={<>Review</>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
