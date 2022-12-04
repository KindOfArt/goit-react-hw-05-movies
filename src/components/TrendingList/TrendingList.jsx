import TrendingItem from 'components/TrendingItem/TrendingItem';
// import PropTypes from 'prop-types';

const TrendingList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(({ id, title, release_date }) => {
        return (
          <TrendingItem
            key={id}
            id={id}
            title={title}
            release_date={release_date}
          />
        );
      })}
    </ul>
  );
};

TrendingList.propTypes = {};

export default TrendingList;
