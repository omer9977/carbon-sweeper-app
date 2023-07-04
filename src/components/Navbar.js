import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CalculatorModal from './CalculatorModal';
import SignIn from '../pages/SignIn';

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  const linkStyle = {
    color: 'white',
    marginRight: '10px',
    textDecoration: 'none',
  };

  const usernameStyle = {
    marginRight: '10px',
    color: 'white',
  };

  const navbarStyle = {
    backgroundColor: '#54BD58',
    width: '100%',
    height: '100%',
    display: 'flex',
    color: '#FBF2F2',
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

  };

  const profileOptionsStyle = {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#54BD58',
    padding: '10px',
    marginTop: '5px',
    top: '40px',
    right: 0,
  };

  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const [showCalculatorModal, setShowCalculatorModal] = useState(false);

  const handleOpenCalculatorModal = () => {
    console.log("selam");
    setShowCalculatorModal(true);
  };

  const handleCloseCalculatorModal = () => {
    setShowCalculatorModal(false);
  };

  const handleProfileClick = () => {
    setShowProfileOptions(prevState => !prevState);
  };

  const handleLogout = () => {
    onLogout();
    setShowProfileOptions(false);
  };

  return (
    <div>
      <nav className="navbar" style={navbarStyle}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline' }}>
            <NavLink to="/home" style={linkStyle}>Home</NavLink>
          </li>
          <li style={{ display: 'inline' }}>
            <NavLink className='nav-button' onClick={handleOpenCalculatorModal} style={linkStyle}>Calculator</NavLink>
          </li>
          <li style={{ display: 'inline' }}>
            <NavLink to="/" style={linkStyle}>Leaderboard</NavLink>
          </li>
          <li style={{ display: 'inline' }}>
            <NavLink to="/foot-print-info" style={linkStyle}>Foot Print Info</NavLink>
          </li>
        </ul>
        {/* {isLoggedIn && ( */}
        <div style={profileStyle}>
          <span style={usernameStyle}>{/*username*/}John Doe</span>
          <img
            src="https://img.a.transfermarkt.technology/portrait/header/68863-1671105169.png?lm=1"
            alt="Profile"
            style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
            onClick={handleProfileClick}
          />
          {showProfileOptions && (
            <div style={profileOptionsStyle}>
              <NavLink to="/profile" style={linkStyle}>Profil</NavLink>
              <button onClick={handleLogout} style={linkStyle}>Logout</button>
            </div>
          )}
        </div>
      </nav>
      <CalculatorModal show={showCalculatorModal} onHide={handleCloseCalculatorModal} />
    </div>
  );
};

export default Navbar;
