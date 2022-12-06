import React from 'react';
import PropTypes from 'prop-types';
import { StyledGoBack } from './LinkGoBack.styled';

const LinkGoBack = ({ backLinkHref }) => {
  return (
    <div>
      <StyledGoBack to={backLinkHref}>Go Back</StyledGoBack>
    </div>
  );
};

LinkGoBack.propTypes = {
  backLinkHref: PropTypes.object.isRequired,
};

export default LinkGoBack;
