import { getTrendingMovie } from 'API/moviesdbAPI';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [yrendingList, setYrendingList] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => console.log(results));
  }, []);

  return (
    <>
      <main>
        <ul></ul>
      </main>
    </>
  );
};

export default Home;
