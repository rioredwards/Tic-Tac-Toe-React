import './App.css';
import { useContext } from 'react';
import { GameContext } from './context/GameContext.js';
import GameBoard from './components/GameBoard.js';

function App() {
  const { gameBoard, currentPlayer, gameIsActive, gameMessage } = useContext(GameContext);

  return (
    <div className="App">
      <div className="context">
        <div>{`gameBoard: ${gameBoard}`}</div>
        <div>{`currentPlayer: ${currentPlayer}`}</div>
        <div>{`gameIsActive: ${gameIsActive}`}</div>
        <div>{`gameMessage: ${gameMessage}`}</div>
      </div>
      <main>
        <div className="game-message">{gameMessage}</div>
        <GameBoard></GameBoard>
      </main>
    </div>
  );
}

export default App;
