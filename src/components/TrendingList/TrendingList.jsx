import TrendingItem from 'components/TrendingItem/TrendingItem';
// import PropTypes from 'prop-types';

const TrendingList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(({ id, title }) => {
        return <TrendingItem key={id} id={id} title={title} />;
      })}
    </ul>
  );
};

TrendingList.propTypes = {};

export default TrendingList;
