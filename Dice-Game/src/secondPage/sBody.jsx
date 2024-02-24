import { useState } from "react"
import { view as V } from "./view"

export const sBody = ({toog , rollDice, random, diceNumbers, reset, un}) => {
  const [show, setShow] = useState(false)

  function showRules(){
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  
  return (
    <div className='sBody'>
        <div className="B">
          <h1>{un}</h1>
          <button onClick={rollDice}>
            <img src={`../Public/images/${diceNumbers[random]}.png`} alt="Dice"/>
          </button>
          <p>Click on Dice to Roll</p>
          <button className = "u" onClick={reset}>Reset Score</button>
          <button className = "u" onClick={showRules}>Show Rules</button>
          <button className="u" onClick={toog}>Home</button>
          {show ? <V/>: <></>}
        </div>
    </div>
  )
}
