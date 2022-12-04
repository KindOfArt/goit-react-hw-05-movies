import MoviesItem from 'components/MoviesItem/MoviesItem';

// import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title, release_date }) => (
          <MoviesItem
            key={id}
            id={id}
            title={title}
            release_date={release_date}
          />
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {};

export default MoviesList;
