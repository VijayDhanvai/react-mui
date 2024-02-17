import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="btn">
        Home{' '}
      </Link>
      <Link to="about" className="btn">
        About{' '}
      </Link>
      <Link to="products" className="btn">
        Products{' '}
      </Link>
    </nav>
  );
};
export default Navbar;
