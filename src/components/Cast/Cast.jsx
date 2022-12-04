import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from 'API/moviesdbAPI';

import PropTypes from 'prop-types';

const Cast = props => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieActors(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 && (
        <div>
          {cast.map(({ id, name, profile_path }) => {
            const castPhoto = profile_path ?? '';
            return (
              <div key={id}>
                <div className="actor-photo">
                  {castPhoto && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${castPhoto}`}
                      width="150px"
                      height="auto"
                      alt="Actor profile"
                    />
                  )}
                </div>
                <div className="name">
                  <p>{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

Cast.propTypes = {};

export default Cast;
