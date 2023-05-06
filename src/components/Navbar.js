import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/profile" style={linkStyle}>Profil</NavLink>
          <button onClick={onLogout} style={linkStyle}>Logout</button>
        </>
      );
    } else {
      return <NavLink to="/register" style={linkStyle}>Register</NavLink>;
    }
  };

  return (
    <nav style={navbarStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline' }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
        </li>
        <li style={{ display: 'inline' }}>
          <NavLink to="/" style={linkStyle}>Calculator</NavLink>
        </li>
        <li style={{ display: 'inline' }}>
          <NavLink to="/" style={linkStyle}>Leaderboard</NavLink>
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
