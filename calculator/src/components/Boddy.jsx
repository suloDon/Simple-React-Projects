import React, { useState } from 'react'
const Boddy = () => {
    const [copy, setCopy] = useState('')
    const [type, setType] = useState(0)

    function copyNinja(event){
        setCopy(copy + event)
    }

    function clear(){
        setType(0)
        setCopy('')
    }

    function overAllResult(){
        setType(eval(copy))
    }


  return (
    <div className='main-body'>
        <div className="bord">
            <p>{copy}</p>
            <h1>{type}</h1>
        </div>
        <div className="butt">
            <button onClick={clear}>AC</button>
            <button onClick ={() => copyNinja('')}>+/-</button>
            <button onClick ={() => copyNinja('%')}>%</button>
            <button onClick ={() => copyNinja('/')}>/</button>
        </div>

        <div className="lower">
            <button onClick ={() => copyNinja(7)}>7</button>
            <button onClick ={() => copyNinja(8)}>8</button>
            <button onClick ={() => copyNinja(9)}>9</button>
            <button onClick ={() => copyNinja('*')}>*</button>
            <button onClick ={() => copyNinja(4)}>4</button>
            <button onClick ={() => copyNinja(5)}>5</button>
            <button onClick ={() => copyNinja(6)}>6</button>
            <button onClick ={() => copyNinja('-')}>-</button>
            <button onClick ={() => copyNinja(1)}>1</button>
            <button onClick ={() => copyNinja(2)}>2</button>
            <button onClick ={() => copyNinja(3)}>3</button>
            <button onClick ={() => copyNinja('+')}>+</button>
            <button onClick ={() => copyNinja(0)}>0</button>
            <button></button>
            <button onClick ={() => copyNinja('.')}>.</button>
            <button onClick={overAllResult}>=</button>
        </div>
        
    </div>
  )
}

export default Boddy