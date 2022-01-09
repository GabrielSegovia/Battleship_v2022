import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";



function Square({ value, click }) {
  return (
    <div className="board-square" onClick={click}>
      {value}
    </div>
  );
}

function Game() {
  const [squares, setSquares] = useState(Array(100).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextSymbole = isXNext ? "X" : "O";
  //la function on click n'est pas pareil du complet a cette version
  function onClickSquare(position) {
    let maCopie = squares.slice();

    maCopie[position] = nextSymbole;
    setSquares(maCopie);
    setIsXNext(!isXNext);
  }

  function fabriqueSquare(position) {
    return (
      <Square value={squares[position]} click={() => onClickSquare(position)} />
    );
  }

  return (
    <div className="container">
      <h1>Tic tac toe</h1>
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {fabriqueSquare(0)}
            {fabriqueSquare(1)}
            {fabriqueSquare(2)}
            {fabriqueSquare(3)}
            {fabriqueSquare(4)}
            {fabriqueSquare(5)}
            {fabriqueSquare(6)}
            {fabriqueSquare(7)}
            {fabriqueSquare(8)}
            {fabriqueSquare(9)}
          </div>
          <div className="board-row">
            {fabriqueSquare(10)}
            {fabriqueSquare(11)}
            {fabriqueSquare(12)}
            {fabriqueSquare(13)}
            {fabriqueSquare(14)}
            {fabriqueSquare(15)}
            {fabriqueSquare(16)}
            {fabriqueSquare(17)}
            {fabriqueSquare(18)}
            {fabriqueSquare(19)}
          </div>
          <div className="board-row">
            {fabriqueSquare(6)}
            {fabriqueSquare(7)}
            {fabriqueSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
