import NavLinkList from 'components/NavLinkList/NavLinkList';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainNavigate = () => {
  return (
    <>
      <header>
        <NavLinkList />
      </header>
      <Outlet />
    </>
  );
};

export default MainNavigate;
