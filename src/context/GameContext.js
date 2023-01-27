import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState(['O', 'X', 'O', 'O', '', '', 'X', '', 'X']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameIsActive, setGameIsActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your Turn X');

  function handleTileClick(id) {
    // Guard clause
    if (!gameIsActive) return;
    if (gameBoard[id] !== '') return;

    // Update gameBoard with new tile value
    const newGameBoard = [...gameBoard];
    newGameBoard[id] = currentPlayer;
    setGameBoard(newGameBoard);

    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <GameContext.Provider
      value={{
        gameBoard,
        setGameBoard,
        currentPlayer,
        setCurrentPlayer,
        gameIsActive,
        setGameIsActive,
        gameMessage,
        setGameMessage,
        handleTileClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
