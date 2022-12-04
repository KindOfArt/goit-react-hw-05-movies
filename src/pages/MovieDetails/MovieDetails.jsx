import useMovieDetails from 'hooks/useMovieDetails';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const links = [
  { href: 'cast', text: 'Cast' },
  { href: 'review', text: 'Review' },
];

const MovieDetails = () => {
  const [
    { title, status, overview, poster_path, genres, release_date, popularity },
  ] = useMovieDetails({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <div className="container">
        <div className="link-go-back">
          <NavLink to={backLinkHref}>Go Back</NavLink>
        </div>
        <div className="movie-detail-thumb">
          <div className="image">
            {poster_path ? (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={title}
                />
              </div>
            ) : (
              'Poster'
            )}
          </div>
          <div className="description-thumb">
            <div className="title">
              <h1>
                {title}
                {release_date && <span>({release_date.slice(0, 4)})</span>}
              </h1>
            </div>
            <div className="status">
              <span>{status}</span>
            </div>
            <div className="popularity">{popularity}</div>
            <div className="overwiew">
              <p>{overview}</p>
            </div>
            <div className="genres">
              {genres && genres.map(({ name }) => name).join(' ')}
            </div>
          </div>
        </div>
        <div className="additional-info">
          <div className="links">
            {links.map(({ href, text }) => (
              <div key={href}>
                <NavLink to={href} state={{ from: backLinkHref }}>
                  {text}
                </NavLink>
              </div>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
