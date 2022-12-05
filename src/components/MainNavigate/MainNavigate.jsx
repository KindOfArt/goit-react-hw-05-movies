import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavLinkList from 'components/NavLinkList/NavLinkList';
import { Header } from './MainNavigate.styled';

const MainNavigate = () => {
  return (
    <>
      <Header>
        <NavLinkList />
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainNavigate;
