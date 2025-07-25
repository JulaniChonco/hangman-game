import React from 'react';
import Button from 'react-bootstrap/Button';

const Keyboard = ({ onGuess, guessedLetters }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard d-flex flex-wrap justify-content-center">
      {letters.map(letter => (
        <Button
          key={letter}
          variant="secondary"
          className="m-1"
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default Keyboard;
