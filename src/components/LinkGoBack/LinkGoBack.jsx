import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LinkGoBack = ({ backLinkHref }) => {
  return (
    <div>
      <NavLink to={backLinkHref}>Go Back</NavLink>
    </div>
  );
};

LinkGoBack.propTypes = {};

export default LinkGoBack;
