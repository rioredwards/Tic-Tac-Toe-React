import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState(['', '', '', '', '', '', '', '', '']);
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

  function checkEndState() {
    // Iterate through possible win-states
    for (const winState of winStates) {
      checkWinState(winState[0], winState[1], winState[2]);
    }
  }

  function checkWinState(i, j, k) {
    if (gameBoard[i] === gameBoard[j] && gameBoard[j] === gameBoard[k] && gameBoard[i]) {
      if (gameBoard[i] === 'X') console.log(`Player X Wins!`);
      else if (gameBoard[i] === 'O') console.log(`Player O Wins!`);
      else console.log('Error in checkWinState!');
    }
  }

  checkEndState();

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
