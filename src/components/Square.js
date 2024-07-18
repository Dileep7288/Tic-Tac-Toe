import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="border border-solid border-black p-0 w-9 font-bold h-9 text-2xl float-left "
    >
      {value}
    </button>
  );
};

export default Square;
