import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Board() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </>
  )
}

export default Board
