import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavLinkList = props => {
  return (
    <ul>
      {navItems.map(({ href, text }) => {
        return (
          <li key={href}>
            <NavLink to={href}>{text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinkList;
