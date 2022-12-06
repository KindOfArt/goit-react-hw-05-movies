import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, release_date }) => {
  return (
    <div>
      <h1>
        {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
      </h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Title;
