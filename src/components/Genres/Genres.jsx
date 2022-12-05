import React from 'react';
import PropTypes from 'prop-types';

const Genres = ({ genres }) => {
  return <div> {genres && genres.map(({ name }) => name).join(' ')}</div>;
};

Genres.propTypes = {};

export default Genres;
