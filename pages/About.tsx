import React from 'react';
import { Link } from 'react-router-dom';
import StackOrderDemo from '../components/StackOrder';
import WebSocketLineChart from '../components/WebSocketLineChart';

const About = () => {
  return (
    <section>
      <h2>About</h2>
      {/* <WebSocketLineChart /> */}

      <StackOrderDemo />
      <Link to="/" className="btn">
        Back Home Page
      </Link>
    </section>
  );
};
export default About;
