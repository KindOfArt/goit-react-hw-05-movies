import React from 'react';
import { Poster, PosterThumb } from './PosterImage.styled';
import PropTypes from 'prop-types';

const PosterImage = ({ poster_path }) => {
  return (
    <>
      {poster_path ? (
        <PosterThumb>
          <Poster
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt="poster_photo"
          />
        </PosterThumb>
      ) : (
        <div className="image">Poster</div>
      )}
    </>
  );
};

PosterImage.propTypes = {
  poster_path: PropTypes.string.isRequired,
};

export default PosterImage;
