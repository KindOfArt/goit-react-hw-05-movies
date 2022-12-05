import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  max-width: 500px;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
`;
