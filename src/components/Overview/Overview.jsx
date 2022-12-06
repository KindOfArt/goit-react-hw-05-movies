import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overview = ({ overview }) => {
  return (
    <Container>
      <b>Overview:</b>
      <p>{overview}</p>
    </Container>
  );
};

Overview.propTypes = {
  overview: PropTypes.string.isRequired,
};

export default Overview;

const Container = styled.div`
  display: flex;
  gap: 5px;
`;
