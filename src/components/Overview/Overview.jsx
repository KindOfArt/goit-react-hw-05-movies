import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({ overview }) => {
  return (
    <div>
      <p>{overview}</p>
    </div>
  );
};

Overview.propTypes = {};

export default Overview;
