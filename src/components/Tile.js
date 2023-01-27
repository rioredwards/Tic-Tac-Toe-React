import React from 'react';
import './Tile.css';

export default function Tile({ value }) {
  return <div className="tile-container">{value}</div>;
}
