import { useState } from "react"

export const Navv = ({selectNumber, selected , score}) => {




  return (
    <div className="secondMain">
        <div className="w">
           <h1>{score}</h1>
            <p>Total Score</p>
        </div>

        <div className="bon">
          <div className="X">
            <button onClick={()=> selected(1)}>1</button>
            <button onClick={()=> selected(2)}>2</button>
            <button onClick={()=> selected(3)}>3</button>
            <button onClick={()=> selected(4)}>4</button>
            <button onClick={()=> selected(5)}>5</button>
            <button onClick={()=> selected(6)}>6</button>
          </div>
          <div>
            <p>Select Number: {selectNumber}</p>
          </div>
            
        </div>
    </div>
  )
}
