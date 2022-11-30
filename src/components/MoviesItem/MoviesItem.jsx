import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';

const MoviesItem = ({ id, title }) => {
  return (
    <li>
      <div>
        <NavLink to={`${id}`}>{title}</NavLink>
      </div>
    </li>
  );
};

MoviesItem.propTypes = {};

export default MoviesItem;
