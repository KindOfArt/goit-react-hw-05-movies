import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinkGoBack = ({ backLinkHref }) => {
  return (
    <div>
      <StyledLink to={backLinkHref}>Go Back</StyledLink>
    </div>
  );
};

LinkGoBack.propTypes = {
  backLinkHref: PropTypes.object.isRequired,
};

export default LinkGoBack;

const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background-color: black;
  &:hover {
    scale: 1.1;
  }
`;
