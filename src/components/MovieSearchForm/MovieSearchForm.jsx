import { searchMovies } from 'API/moviesdbAPI';
import { useForm } from 'react-hook-form';

// import PropTypes from 'prop-types';

const MovieSearchForm = ({ setMovies }) => {
  const { handleSubmit, register } = useForm({ defaultValues: '' });

  const submit = ({ searchQuery }) => {
    if (!searchQuery) {
      return;
    }

    searchMovies(searchQuery)
      .then(({ results }) => results.map(({ id, title }) => ({ id, title })))
      .then(setMovies);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Search a movie:
          <input
            type="text"
            placeholder="movie name"
            autoComplete="off"
            {...register('searchQuery')}
          />
        </label>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

MovieSearchForm.propTypes = {};

export default MovieSearchForm;
