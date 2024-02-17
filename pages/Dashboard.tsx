import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section>
      <h2>Dashboard</h2>
      <Link to="/" className="btn">
        Back Home Page
      </Link>
    </section>
  );
};
export default Dashboard;
