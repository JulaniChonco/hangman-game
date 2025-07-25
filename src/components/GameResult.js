import React from 'react';
import './GameResult.css'; // Make sure to create this CSS file

const GameResult = ({ status, word }) => {
  if (!status) return null;

  return (
    <div className="game-result text-center mt-4">
      {status === 'win' && <h2 className="text-success">🎉 You Win!</h2>}
      {status === 'lose' && (
        <>
          <h2 className="text-danger">😢 You Lose!</h2>
          <p className="reveal-word">The correct word was: <strong>{word}</strong></p>
        </>
      )}
    </div>
  );
};

export default GameResult;
