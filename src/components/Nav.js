import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const styles = {
    listStyleType: 'none',
    textDecorationLine: 'none',
  };

  return (
    <nav className="nav">
      <Link style={styles} to="/">
        <h3 className="nav-logo">Calculator</h3>
      </Link>
      <ul className="nav-items">
        <Link style={styles} to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link style={styles} to="/calculator">
          <li className="nav-item">Calculator</li>
        </Link>
        <Link style={styles} to="/quote">
          <li className="nav-item">Quote</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
