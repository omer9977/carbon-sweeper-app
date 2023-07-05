import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CalculatorModal from './CalculatorModal';
import SignIn from '../pages/SignIn';
import decodeJWT from "../utils/jwtDecoder";

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  const token = localStorage.getItem('accessToken');
  const decodedToken = decodeJWT(token);
  const navigate = useNavigate();
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
    console.log(decodedToken);
    setShowProfileOptions(prevState => !prevState);
  };

  const handleLogout = () => {
    // onLogout();
    setShowProfileOptions(false);
    // localStorage.removeItem('accessToken');
    // navigate("/");
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
            <NavLink to="/leaderboard" style={linkStyle}>Leaderboard</NavLink>
          </li>
          <li style={{ display: 'inline' }}>
            <NavLink to="/foot-print-info" style={linkStyle}>Foot Print Info</NavLink>
          </li>
        </ul>
        {/* {isLoggedIn && ( */}
        <div style={profileStyle}>
          <span style={usernameStyle}>{decodedToken?.userFullName}</span>
          <img
            src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"
            alt="Profile"
            style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
            onClick={handleProfileClick}
          />
          {showProfileOptions && (
            <div style={profileOptionsStyle}>
              <NavLink to="/profile" onClick={handleLogout} style={linkStyle}>Profil</NavLink>
              <NavLink to="/" onClick={handleLogout} style={linkStyle}>Logout</NavLink>
            </div>
          )}
        </div>
      </nav>
      <CalculatorModal show={showCalculatorModal} onHide={handleCloseCalculatorModal} />
    </div>
  );
};

export default Navbar;
