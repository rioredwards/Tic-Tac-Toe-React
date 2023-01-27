import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import './GameBoard.css';
import Tile from './Tile.js';

export default function GameBoard() {
  const { gameBoard } = useContext(GameContext);

  return (
    <div className="game-board">
      {gameBoard.map((tile, index) => {
        return <Tile key={index} value={tile} />;
      })}
    </div>
  );
}
