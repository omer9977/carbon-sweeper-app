import React from 'react'
import SignInForm from '../components/SignInForm'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../css/signin.css';

export default function SignIn({ showModal, handleCloseModal }) {
  
  return (
    <Modal className='custom-modal' show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm />
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
