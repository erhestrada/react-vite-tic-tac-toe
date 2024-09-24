import { useState } from 'react'
import './App.css'

function Square({squareValue, handleSquareClick}) {
  return <button onClick={handleSquareClick}>{squareValue}</button>
}

function Board() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquareClick(i) {
    const updatedSquareValues = squareValues.slice();
    if (xIsNext) {
      updatedSquareValues[i] = 'X';
    } else {
      updatedSquareValues[i] = 'O';
    }

    setSquareValues(updatedSquareValues);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>
        <Square squareValue = {squareValues[0]} handleSquareClick = {() => handleSquareClick(0)} />
        <Square squareValue = {squareValues[1]} handleSquareClick = {() => handleSquareClick(1)} />
        <Square squareValue = {squareValues[2]} handleSquareClick = {() => handleSquareClick(2)} />
      </div>
      <div>
        <Square squareValue = {squareValues[3]} handleSquareClick = {() => handleSquareClick(3)} />
        <Square squareValue = {squareValues[4]} handleSquareClick = {() => handleSquareClick(4)} />
        <Square squareValue = {squareValues[5]} handleSquareClick = {() => handleSquareClick(5)} />
      </div>
      <div>
        <Square squareValue = {squareValues[6]} handleSquareClick = {() => handleSquareClick(6)} />
        <Square squareValue = {squareValues[7]} handleSquareClick = {() => handleSquareClick(7)} />
        <Square squareValue = {squareValues[8]} handleSquareClick = {() => handleSquareClick(8)} />
      </div>
    </>
  )
}

export default Board
