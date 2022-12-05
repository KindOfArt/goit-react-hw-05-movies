import MoviesItem from 'components/MoviesItem/MoviesItem';
import { List } from 'components/TrendingList/TrandingList.styled';
import { ListThumb } from './MovieList.styled';

// import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ListThumb>
      <List>
        {movies.map(({ id, title, release_date }) => (
          <MoviesItem
            key={id}
            id={id}
            title={title}
            release_date={release_date}
          />
        ))}
      </List>
    </ListThumb>
  );
};

MoviesList.propTypes = {};

export default MoviesList;
