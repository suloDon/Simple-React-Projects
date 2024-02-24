import { products } from './products'
import NavTop from "../Nav/NavTop"
import { useEffect, useState } from 'react';

export const Prod = () => {
    const pro = products;
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState([])
  
    function valueCheck(e){
        setValue(e.target.value)
    }

    useEffect(() => {
        setFiltered(pro.filter(p => p.name.toLowerCase().includes(value.toLowerCase())))
    }, [value])

    function demonSlayer(type){
        if(type === "all"){
            setFiltered(pro)
        }
        if(type === "demonSlayer"){
            setFiltered(pro.filter(p => p.type.includes(type))) 
        } 
        if(type === "naruto"){
            setFiltered(pro.filter(p => p.type.includes(type))) 
        }        
        if(type === "onePiece"){
            setFiltered(pro.filter(p => p.type.includes(type))) 
        }        
        if(type === "juju"){
            setFiltered(pro.filter(p => p.type.includes(type))) 
        }        
        if(type === "aot"){
            setFiltered(pro.filter(p => p.type.includes(type))) 
        }        
    }
    
    

  return (
    <>
        <NavTop setValue = {valueCheck} demon = {demonSlayer}/>
        <div className="boddy">
            <div  className='iam'>
                {filtered.map((p,i) => (
                        <div key={i} className="inside">
                            <div className="image">
                                <img src={p.img} alt="" />
                            </div>
                        <div className="others">
                            <div className="writing">
                                <h4>{p.name}</h4>
                                <p>{p.disc}</p>
                            </div>
                            <div className="bu">
                                <button>${p.price.toFixed(2)}</button>
                            </div>
                        </div>
                    </div>   
                ))}
            </div>

        </div>
        
    </>
   
  )
}

