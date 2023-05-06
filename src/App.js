import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
<Router>
  <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />

      {/* Diğer rotaları buraya ekleyebilirsiniz */}
    </Routes>
  </div>
</Router>

  );
};

export default App;
