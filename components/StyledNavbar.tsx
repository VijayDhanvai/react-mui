import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}
        className="btn"
      >
        Home{' '}
      </NavLink>
      <NavLink to="about" className="btn">
        About{' '}
      </NavLink>
      <NavLink
        to="products"
        className={(isActive) => {
          isActive ? 'link active' : 'link';
        }}
      >
        Products{' '}
      </NavLink>
    </nav>
  );
};
export default Navbar;
