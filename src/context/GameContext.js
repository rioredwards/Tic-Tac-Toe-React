import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState(['O', 'X', 'O', 'O', '', '', 'X', '', 'X']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameIsActive, setGameIsActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your Turn X');

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
