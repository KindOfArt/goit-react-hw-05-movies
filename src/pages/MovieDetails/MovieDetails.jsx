import useMovieDetails from 'hooks/useMovieDetails';

const MovieDetails = () => {
  const [
    {
      title,
      tagline,
      status,
      overview,
      original_language,
      release_date,
      poster_path,
      genres,
    },
  ] = useMovieDetails({});

  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <span>{status}</span>
        </div>
        {poster_path ? (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
          </div>
        ) : null}
        <div>
          <h2>{tagline}</h2>
        </div>
        <div>
          <h3>{overview}</h3>
        </div>
        {genres && genres.map(({ id, name }) => <span key={id}>{name}</span>)}
        <div>{original_language}</div>
        <div>{release_date}</div>
      </div>
    </>
  );
};

export default MovieDetails;
