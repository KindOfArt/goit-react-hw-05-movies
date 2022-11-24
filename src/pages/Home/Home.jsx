import { NavLink } from 'react-router-dom';
import useTrendingMovies from 'hooks/useTrendingMovies';

const Home = () => {
  const [trendingList] = useTrendingMovies();

  return (
    <div>
      <h1 style={{ marginBottom: 10 }}>Tranding movies</h1>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {trendingList.length > 0 &&
          trendingList.map(({ id, title, name }) => (
            <li key={id}>
              <NavLink to={`movies/${id}`}>{title ?? name}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
