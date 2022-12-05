import React from 'react';
import PropTypes from 'prop-types';

const PosterImage = ({ poster_path }) => {
  return (
    <>
      {poster_path ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt="poster_photo"
          />
        </div>
      ) : (
        <div className="image">Poster</div>
      )}
    </>
  );
};

PosterImage.propTypes = {};

export default PosterImage;
