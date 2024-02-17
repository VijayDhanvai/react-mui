import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
      <h2>Login</h2>
      <Link to="/" className="btn">
        Back Home Page
      </Link>
    </section>
  );
};
export default Login;
