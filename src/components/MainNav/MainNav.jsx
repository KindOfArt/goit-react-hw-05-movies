import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const MainNav = () => {
  return (
    <div>
      <header
        style={{
          borderBottom: '2px solid black',
          padding: '30px 0 30px 10px',
          marginBottom: 20,
        }}
      >
        <nav style={{ display: 'flex', gap: 40 }}>
          {navItems.map(({ href, text }) => (
            <NavLink
              style={{ fontSize: 22, fontWeight: 700 }}
              key={href}
              to={href}
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default MainNav;
