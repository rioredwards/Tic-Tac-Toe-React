import { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import './Tile.css';

export default function Tile({ value }) {
  const { HandleTileClick } = useContext(GameContext);

  return (
    <div onClick={HandleTileClick} className="tile-container">
      {value}
    </div>
  );
}
