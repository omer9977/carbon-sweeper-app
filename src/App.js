import Welcome from "./pages/Welcome";
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
      <Route path="/" element={<Welcome />} />

    </Routes>
  </div>
</Router>

  );
};

export default App;