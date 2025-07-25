import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => (
  <div className="word-display mb-4">
    {word.split('').map((letter, index) => (
      <span key={index} className="letter mx-1">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ))}
  </div>
);

export default WordDisplay;
