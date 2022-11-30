import MoviesItem from 'components/MoviesItem/MoviesItem';

// import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <MoviesItem key={id} id={id} title={title} />
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {};

export default MoviesList;
