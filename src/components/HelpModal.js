import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const HelpModal = ({ show, onClose }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>How to Play Hangman</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Guess the hidden word one letter at a time.</p>
      <p>You can make up to 6 incorrect guesses before the game ends.</p>
      <p>If you guess all letters correctly, you win!</p>
      <p>Click "Restart" to play again.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default HelpModal;
