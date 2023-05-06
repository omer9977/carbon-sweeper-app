import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  const navbarStyle = {
    backgroundColor: 'green',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    marginRight: '10px',
    textDecoration: 'none',
  };

  const profileStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const renderProfileOptions = () => {
    if (/*isLoggedIn*/true) {
      return (
        <>
          <Link to="/profile" style={linkStyle}>Profil</Link>
          <button onClick={onLogout} style={linkStyle}>Logout</button>
        </>
      );
    } else {
      return <Link to="/register" style={linkStyle}>Register</Link>;
    }
  };

  return (
    <nav style={navbarStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline' }}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/" style={linkStyle}>Calculator</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/" style={linkStyle}>Leaderboard</Link>
        </li>
      </ul>
      {isLoggedIn && (
        <div>
          <span style={{ marginRight: '10px', color: 'white' }}>Welcome, {username}</span>
          {renderProfileOptions()}
        </div>
      )}
      {!isLoggedIn && renderProfileOptions()}
    </nav>
  );
};

export default Navbar;
