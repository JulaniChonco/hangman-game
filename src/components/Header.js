import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = ({ title = "Enjoy the Hangman game", showButtons = true, onRestart, onHelp }) => {
  return (
    <div className="header text-center my-4">
      <h1>{title}</h1>
      {showButtons && (
        <div className="header-buttons mt-3">
          <Button variant="primary" className="mx-2" onClick={onRestart}>
            Restart
          </Button>
          <Button variant="info" className="mx-2" onClick={onHelp}>
            Help
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
