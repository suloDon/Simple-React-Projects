import React, { useState } from 'react'

const NavTop = (props) => {

  return (
    <div className='Nav'> 
        <div className="top">
            <h1>Anime Zone</h1>
            <input type="text" onChange={props.setValue} placeholder='Search here' />
        </div>

        <div className="down">
            <button onClick={() => props.demon("all")}>All</button>
            <button onClick={() => props.demon("demonSlayer")}>Demon Slayer</button>
            <button onClick={() => props.demon("onePiece")}>One Piece</button>
            <button onClick={() => props.demon("juju")}>Jujutsu kaison</button>
            <button onClick={() => props.demon("naruto")}>Naruto</button>
            <button onClick={() => props.demon("aot")}>AOT</button>
        </div>

    </div>
  )
}

export default NavTop