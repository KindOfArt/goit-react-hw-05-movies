import TrendingItem from 'components/TrendingItem/TrendingItem';
import { List } from './TrandingList.styled';

// import PropTypes from 'prop-types';

const TrendingList = ({ trendingMovies }) => {
  return (
    <List>
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
    </List>
  );
};

TrendingList.propTypes = {};

export default TrendingList;
