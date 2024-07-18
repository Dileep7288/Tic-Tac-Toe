import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xnext, setXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXNext(!xnext);
  };

  return (
    <div>
      <div>
        <Board xnext={xnext} squares={currentSquares} onPlay={handlePlay} />
      </div>
    </div>
  );
};

export default Game;
