import React from 'react';

const HangmanImage = ({ wrongGuesses }) => {
  const imagePath = `/images/hangman${wrongGuesses}.gif`;

  return (
    <div className="hangman-image mb-4">
      <img
        src={imagePath}
        alt={`Hangman step ${wrongGuesses}`}
        style={{ maxWidth: '200px' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/hangman0.gif';
        }}
      />
    </div>
  );
};

export default HangmanImage;
