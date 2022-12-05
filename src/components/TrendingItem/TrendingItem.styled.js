import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  font-size: 18px;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
