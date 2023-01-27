import { useContext } from 'react';
import './App.css';
import { GameContext } from './context/GameContext.js';

function App() {
  const {
    gameBoard,
    setGameBoard,
    currentPlayer,
    setCurrentPlayer,
    gameIsActive,
    setGameIsActive,
    gameMessage,
    setGameMessage,
  } = useContext(GameContext);

  return (
    <div className="App">
      <div className="context">
        <div>{`gameBoard: ${gameBoard}`}</div>
        <div>{`setGameBoard: ${setGameBoard}`}</div>
        <div>{`currentPlayer: ${currentPlayer}`}</div>
        <div>{`setCurrentPlayer: ${setCurrentPlayer}`}</div>
        <div>{`gameIsActive: ${gameIsActive}`}</div>
        <div>{`setGameIsActive: ${setGameIsActive}`}</div>
        <div>{`gameMessage: ${gameMessage}`}</div>
        <div>{`setGameMessage: ${setGameMessage}`}</div>
      </div>
    </div>
  );
}

export default App;
