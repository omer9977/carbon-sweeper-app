import "../css/stats.css";
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SignIn from "../pages/SignIn";

function Stats() {
  const seed = Math.floor(Math.random() * 1000);
  const totalUsers = <div className="number">{seed}</div>;
  const savedTrees = <div className="number">{Math.floor(seed * 0.8)}</div>;
  const emissions = <div className="number">0.1</div>;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // show prop'u değiştiğinde yapılacak işlemler
    if (showModal) {
      // Modal açılacaksa burada gerekli işlemler yapılabilir
      console.log(showModal);
    } else {
      // Modal kapanacaksa burada gerekli işlemler yapılabilir
      console.log(showModal);

    }
  }, [showModal]);

  return (
    <div className="content">
      <div>
        <img className="custom-image" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house" />
      </div>
      <div>
        <div className="statsec">Total users: {totalUsers}</div>
        <div className="statsec">Saved trees: {savedTrees}</div>
        <div className="statsec">Total emissions: {emissions}</div>
        <div className="buttons">
          <button onClick={handleShowModal}>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <SignIn showModal={showModal} handleCloseModal={handleCloseModal} />

    </div>
  );
}

export default Stats;
