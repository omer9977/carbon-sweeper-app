import Welcome from "./pages/Welcome";
import Home from './pages/Home';
import Container from './components/Container';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SignIn from "./pages/SignIn";

const App = () => {
  return (
<Router>
  <div>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Container><Home /></Container>} />
    </Routes>
  </div>
</Router>

  );
};

export default App;