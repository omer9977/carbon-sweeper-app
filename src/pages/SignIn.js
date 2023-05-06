import { useState, useEffect } from 'react';
import SignInForm from '../components/SignInForm'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../css/signin.css';

export default function SignIn({ showModal, handleCloseModal }) {
  const [show, setShow] = useState(false);
  return (
    <Modal className='custom-modal' show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm show={show} onShowChange={handleCloseModal} />
        </Modal.Body>
        {/* <Modal.Footer>
          <button className='custom-button' onClick={handleCloseModal}>
            Close
          </button>
          <button className='custom-button' onClick={handleCloseModal}>
            Save Changes
          </button>
        </Modal.Footer> */}
      </Modal>
  )
}
