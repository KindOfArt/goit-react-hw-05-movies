import { useLocation } from 'react-router-dom';
import { ListItem, StyledLink } from './TrendingItem.styled';
// import PropTypes from 'prop-types';

const TrendingItem = ({ id, title, release_date }) => {
  const location = useLocation();

  return (
    <ListItem key={id}>
      <StyledLink to={`movies/${id}`} state={{ from: location }}>
        {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
      </StyledLink>
    </ListItem>
  );
};

TrendingItem.propTypes = {};

export default TrendingItem;
