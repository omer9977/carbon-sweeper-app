import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './../css/signin.css';
import SignUpForm from '../components/SignUpForm'

export default function SignUp({ showModal, handleCloseModal }) {
  const [show, setShow] = useState(false);
  return (
    <Modal className='custom-modal' show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm show={show} onShowChange={handleCloseModal} />
        </Modal.Body>
      </Modal>
  )
}
