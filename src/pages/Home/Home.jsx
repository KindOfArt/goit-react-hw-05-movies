import useTrendingMovies from 'hooks/useTrendingMovies';
import TrendingList from 'components/TrendingList/TrendingList';

const Home = () => {
  const [trendingMovies] = useTrendingMovies([]);

  return (
    <>
      {trendingMovies.length > 0 && (
        <TrendingList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
