import React from 'react';
import PropTypes from 'prop-types';

const Popularity = ({ popularity }) => {
  if (!popularity) {
    return;
  }
  return (
    <div>
      <b>Popularyti:</b> {popularity}
    </div>
  );
};

Popularity.propTypes = {
  popularity: PropTypes.number.isRequired,
};

export default Popularity;
