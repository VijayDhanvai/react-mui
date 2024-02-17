import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <h2>404 Page Not Found</h2>
      <Link to="/" className="btn">
        Back Home Page
      </Link>
    </section>
  );
};
export default Error;
