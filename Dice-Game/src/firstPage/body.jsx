import React from 'react'
import Nav from './nav'


const Body = ({tooglee}) => {
  
  

  return (
    <>
    <Nav/>
    <div className='mainPart'>
        <div>
          <img src="..\Public\images\Dice.jpg"/>

        </div>
        <div className='dd'>
            <h1>Dice Game</h1>
            <button onClick={tooglee}>Play Game</button>
        </div>

    </div>
    </>
    
  )
}

export default Body