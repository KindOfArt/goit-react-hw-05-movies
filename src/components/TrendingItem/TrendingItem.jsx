import { NavLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

const TrendingItem = ({ id, title, release_date }) => {
  const location = useLocation();

  return (
    <li key={id}>
      <NavLink to={`movies/${id}`} state={{ from: location }}>
        {title}
        {release_date && <span>({release_date.slice(0, 4)})</span>}
      </NavLink>
    </li>
  );
};

TrendingItem.propTypes = {};

export default TrendingItem;
