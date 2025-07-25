import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header';

const GameModeSelection = ({ onSelectMode }) => {
  return (
    <div className="App container">
      <Header title="Welcome to Hangman Game" showButtons={false} />
      <div className="game-mode-selection text-center mt-5">
        <h2>Select Game Mode</h2>
        <Button variant="success" className="m-2" onClick={() => onSelectMode('timed')}>
          Timed Single Player (2 min)
        </Button>
        <Button variant="secondary" className="m-2" onClick={() => onSelectMode('untimed')}>
          Untimed Single Player
        </Button>
      </div>
    </div>
  );
};

export default GameModeSelection;
