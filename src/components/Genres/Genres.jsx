import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Genres = ({ genres }) => {
  return (
    <GenresItem>
      <b>Genres:</b>
      <div>
        {genres && genres.map(({ name }, idx) => <p key={idx}>{name}</p>)}
      </div>
    </GenresItem>
  );
};

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default Genres;

const GenresItem = styled.div`
  display: flex;
  gap: 5px;
`;
