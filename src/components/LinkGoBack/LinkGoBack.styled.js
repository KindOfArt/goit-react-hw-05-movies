import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledGoBack = styled(NavLink)`
  display: inline-block;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
    color: blue;
  }
`;
