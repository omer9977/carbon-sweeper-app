import Welcome from "./pages/Welcome";
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SignIn from "./pages/SignIn";

const App = () => {
  return (
<Router>
  <div>
    {/* <Navbar /> */}

    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* <Route path="/signin" element={<SignIn />} /> */}

    </Routes>
  </div>
</Router>

  );
};

export default App;