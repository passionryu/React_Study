import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default About;
