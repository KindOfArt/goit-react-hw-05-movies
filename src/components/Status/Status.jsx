import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ status }) => {
  return (
    <div>
      <span>
        <b>Status:</b> {status}
      </span>
    </div>
  );
};

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
