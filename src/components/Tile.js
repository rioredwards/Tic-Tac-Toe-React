import { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import './Tile.css';

export default function Tile({ value, id }) {
  const { handleTileClick } = useContext(GameContext);

  return (
    <div
      onClick={() => {
        handleTileClick(id);
      }}
      className="tile-container"
    >
      {value}
    </div>
  );
}
