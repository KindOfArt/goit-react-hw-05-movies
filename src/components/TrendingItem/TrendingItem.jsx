import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

const TrendingItem = ({ id, title }) => {
  return (
    <li key={id}>
      <NavLink to={`movies/${id}`}>{title}</NavLink>
    </li>
  );
};

TrendingItem.propTypes = {};

export default TrendingItem;
