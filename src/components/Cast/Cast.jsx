import useMovieCast from 'hooks/useMovieCast';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Cast = props => {
  const [cast] = useMovieCast([]);

  return (
    <div>
      {cast.length > 0 && (
        <Container>
          {cast.map(({ id, name, profile_path }) => {
            const castPhoto = profile_path ?? '';
            return (
              <Thumb key={id}>
                <PhotoThumb className="actor-photo">
                  {castPhoto && (
                    <img
                      style={{
                        display: 'block',
                        width: 'auto',
                        height: '100%',
                      }}
                      src={`https://image.tmdb.org/t/p/w200${castPhoto}`}
                      width="150px"
                      height="auto"
                      alt="Actor profile"
                    />
                  )}
                </PhotoThumb>
                <div className="name">
                  <p>{name}</p>
                </div>
              </Thumb>
            );
          })}
        </Container>
      )}
    </div>
  );
};

Cast.propTypes = {};

export default Cast;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Thumb = styled.div`
  min-width: 100px;
  min-height: 100px;
`;

const PhotoThumb = styled.div`
  display: inline-block;
`;
