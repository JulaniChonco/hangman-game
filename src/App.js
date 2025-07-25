
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Button from 'react-bootstrap/Button';


import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanImage from './components/HangmanImage';
import GameResult from './components/GameResult';
import HelpModal from './components/HelpModal';
import HintButton from './components/HintButton';
import FooterModals from './components/FooterModals';
import GameModeSelection from './components/GameModeSelection';

import words from './data/words';

const App = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [status, setStatus] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameMode, setGameMode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (gameMode === 'timed' && status === null) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus('lose');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameMode, status]);

  useEffect(() => {
    if (!word) return;
    const isWin = word.split('').every(letter => guessedLetters.includes(letter));
    if (isWin) {
      setStatus('win');
    } else if (wrongGuesses >= 6) {
      setStatus('lose');
    }
  }, [guessedLetters, wrongGuesses, word]);

  const startNewGame = (mode = gameMode) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setStatus(null);
    setShowHint(false);
    setGameMode(mode);
    if (mode === 'timed') {
      setTimeLeft(120);
    }
  };

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || status) return;
    setGuessedLetters(prev => [...prev, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const handleHint = () => {
    const unguessed = word.split('').filter(l => !guessedLetters.includes(l));
    if (unguessed.length > 0) {
      const hintLetter = unguessed[Math.floor(Math.random() * unguessed.length)];
      handleGuess(hintLetter);
      setShowHint(true);
    }
  };

  if (!gameMode) {
    return <GameModeSelection onSelectMode={startNewGame} />;
  }

  return (
    <div className="App container">
      <Header onRestart={() => startNewGame()} onHelp={() => setShowHelp(true)} />
      {gameMode === 'timed' && status === null && (
        <div className="timer text-center mb-3">Time Left: {timeLeft}s</div>
      )}
      <Button variant="danger" className="mb-3" onClick={() => setGameMode(null)}>
        Quit to Game Mode Selection
      </Button>
      <HangmanImage wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
      <HintButton onHint={handleHint} disabled={status !== null || showHint} />
      <GameResult status={status} word={word} />
      <HelpModal show={showHelp} onClose={() => setShowHelp(false)} />
      <FooterModals />
    </div>
  );
};

export default App;
