import React from 'react';
import Navbar from '../components/Navbar';

const Container = ({ children }) => {
  return (
  <>
  <div>
  <Navbar/>

  </div>
  <div className="container">{children}</div>
  </>)
};

export default Container;