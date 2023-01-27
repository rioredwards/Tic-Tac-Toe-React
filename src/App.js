import './App.css';
import { useContext } from 'react';
import { GameContext } from './context/GameContext.js';
import GameBoard from './components/GameBoard.js';
import Reset from './components/Reset.js';

function App() {
  const { gameMessage } = useContext(GameContext);

  return (
    <div className="App">
      <main>
        <div className="game-message">{gameMessage}</div>
        <Reset></Reset>
        <GameBoard></GameBoard>
      </main>
    </div>
  );
}

export default App;
