import { useState } from 'react'
import './App.css'
import Body from './firstPage/body'
import { Game } from './secondPage/Game'

function App() {
  const [gameStart, setGameStart] = useState(false)

  function toogle(){
    setGameStart(!gameStart)
  }

  return (
    <>
      {gameStart ? <Game toogle = {toogle}/>: <Body tooglee = {toogle}/>}
    </>
  )
}

export default App
