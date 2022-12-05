import { NavLink } from 'react-router-dom';
import { List, ListItem } from './NavLinkList.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavLinkList = props => {
  return (
    <List>
      {navItems.map(({ href, text }) => {
        return (
          <ListItem key={href}>
            <NavLink to={href}>{text}</NavLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavLinkList;
