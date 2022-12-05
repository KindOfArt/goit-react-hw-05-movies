import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavLinkList from 'components/NavLinkList/NavLinkList';

const MainNavigate = () => {
  return (
    <>
      <header>
        <NavLinkList />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainNavigate;
