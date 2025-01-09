import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page</p>
      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
      <br />
      <Link to="/contact">
        <button>Go to Contact Page</button>
      </Link>
    </div>
  );
}

export default Home;
