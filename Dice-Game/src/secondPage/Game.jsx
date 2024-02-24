import { useState } from "react"
import { Navv } from "./Nav"
import { sBody as Bo } from "./sBody"


export const Game = ({toogle}) => {
  const [selectNumber, setSelectNumber] = useState(0)
  const [score , setScore] = useState(0)

  const diceNumbers = ["One","two","Three","Five","six"]
  const [random , setRandom] = useState(1)

  const [unn, setUnn] = useState("Good")

 

  function error(){
    setUnn("Choose the number First")
  }

  function noError(){
    setUnn("Good")
  }

  function selected(num){
    setSelectNumber(s => num)
  }
  
  function rollDice(){
    if (selectNumber == undefined){
      error()
    }else{
      if ((random + 1) === selectNumber) {
        setScore(score + 1)
      }
      else{
        setScore(score - 1)
      }
      const newRandom = Math.floor(Math.random() * 4)
      setRandom(newRandom)
  
      setSelectNumber(undefined)

      noError()
    } 
  }

  function resetScore(){
    setScore(0)
  }

  return (
    <div>
        <Navv selectNumber = {selectNumber} selected = {selected} score = {score}/>
        <Bo un = {unn} reset = {resetScore} toog = {toogle} diceNumbers = {diceNumbers} random = {random} rollDice = {rollDice}/>
    </div>
  )
}
