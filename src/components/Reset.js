import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import './Reset.css';

export default function Reset() {
  const { handleResetClick } = useContext(GameContext);
  return (
    <button className="reset-btn" onClick={handleResetClick}>
      Reset
    </button>
  );
}
