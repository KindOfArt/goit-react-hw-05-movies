import { NavLink, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';

const MoviesItem = ({ id, title, release_date }) => {
  const location = useLocation();

  return (
    <li>
      <div>
        <NavLink to={`${id}`} state={{ from: location }}>
          {title}
          {release_date && <span>({release_date.slice(0, 4)})</span>}
        </NavLink>
      </div>
    </li>
  );
};

MoviesItem.propTypes = {};

export default MoviesItem;
