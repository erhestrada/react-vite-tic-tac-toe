import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square() {
  const [squareClicked, setSquareClicked] = useState(null)

  function handleSquareClick() {
    setSquareClicked('X');
  }

  return <button onClick={handleSquareClick}>{squareClicked}</button>
}

function Board() {
  //
  return (
    <>
      <div>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div>
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
    </>
  )
}

export default Board
