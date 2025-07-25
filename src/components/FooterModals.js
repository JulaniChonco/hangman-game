import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FooterModals = () => {
  const [modalType, setModalType] = useState(null);

  const handleClose = () => setModalType(null);

  const renderContent = () => {
    switch (modalType) {
      case 'about':
        return (
          <>
            <Modal.Header closeButton><Modal.Title>About</Modal.Title></Modal.Header>
            <Modal.Body>
              <p>This Hangman game was built using React. It allows users to play in timed or untimed modes and includes helpful features like hints and game rules.</p>
            </Modal.Body>
          </>
        );
      case 'feedback':
        return (
          <>
            <Modal.Header closeButton><Modal.Title>Feedback</Modal.Title></Modal.Header>
            <Modal.Body>
              <p>We'd love to hear your thoughts! Please send feedback to: <a href="mailto:feedback@example.com">feedback@example.com</a></p>
            </Modal.Body>
          </>
        );
      case 'privacy':
        return (
          <>
            <Modal.Header closeButton><Modal.Title>Privacy Policy</Modal.Title></Modal.Header>
            <Modal.Body>
              <p>This game does not collect or store any personal data. All gameplay is local to your browser session.</p>
            </Modal.Body>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="footer-modals text-center mt-5">
      <Button variant="link" onClick={() => setModalType('about')}>About</Button>
      <Button variant="link" onClick={() => setModalType('feedback')}>Feedback</Button>
      <Button variant="link" onClick={() => setModalType('privacy')}>Privacy Policy</Button>

      <Modal show={modalType !== null} onHide={handleClose}>
        {renderContent()}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FooterModals;
