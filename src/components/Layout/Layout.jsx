import { getTrendingMovie } from 'API/moviesdbAPI';
import AppBar from 'components/AppBar/AppBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  const [trendingList, setTrendingList] = useState([]);

  const filterResults = results =>
    results.map(({ id, title }) => ({ id, title }));

  useEffect(() => {
    getTrendingMovie().then(({ results }) =>
      setTrendingList(filterResults(results))
    );
  }, []);

  console.log(trendingList);

  return (
    <main>
      <AppBar />
      <ul>
        {trendingList.length > 0 &&
          trendingList.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`${id}`}>{title}</NavLink>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Layout;
