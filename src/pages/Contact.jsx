import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Contact;
