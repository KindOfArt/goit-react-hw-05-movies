import TrendingItem from 'components/TrendingItem/TrendingItem';
import { TrandingList } from './TrandingList.styled';
// import PropTypes from 'prop-types';

const TrendingList = ({ trendingMovies }) => {
  return (
    <TrandingList>
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
    </TrandingList>
  );
};

TrendingList.propTypes = {};

export default TrendingList;
