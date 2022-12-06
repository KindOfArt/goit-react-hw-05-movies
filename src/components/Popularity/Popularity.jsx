import React from 'react';
// import PropTypes from 'prop-types';

const Popularity = ({ popularity }) => {
  if (!popularity) {
    return;
  }
  return <div>{popularity}</div>;
};

Popularity.propTypes = {};

export default Popularity;
