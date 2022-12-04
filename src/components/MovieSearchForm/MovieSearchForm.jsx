// import PropTypes from 'prop-types';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MovieSearchForm = ({ getQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    getQuery(searchQuery);

    setSearchQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search a movie:
          <input
            value={searchQuery}
            onChange={e => {
              const value = e.currentTarget.value;
              setSearchQuery(value);
              setSearchParams(value !== '' ? { q: value } : {});
            }}
            type="text"
            name="movies"
            placeholder="search query"
            autoComplete="off"
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
