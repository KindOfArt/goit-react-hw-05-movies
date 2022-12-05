import {
  ListItem,
  StyledLink,
} from 'components/TrendingItem/TrendingItem.styled';
import { useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';

const MoviesItem = ({ id, title, release_date }) => {
  const location = useLocation();

  return (
    <ListItem>
      <StyledLink to={`${id}`} state={{ from: location }}>
        {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
      </StyledLink>
    </ListItem>
  );
};

MoviesItem.propTypes = {};

export default MoviesItem;
