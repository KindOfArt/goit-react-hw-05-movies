import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <header
      style={{
        display: 'grid',
        gridTemplateRows: '50px 1fr',
        backgroundColor: 'tomato',
      }}
    >
      <nav style={{ display: 'flex', gap: 50, marginLeft: 20 }}>
        {navItems.map(({ href, text }) => (
          <NavLink
            style={{ color: 'black', fontSize: 24 }}
            to={href}
            key={href}
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default AppBar;
