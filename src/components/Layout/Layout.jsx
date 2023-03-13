import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Layout.scss';

function Layout() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <Outlet />
      <footer className="footer">2022</footer>
    </>
  );
}

export default Layout;
