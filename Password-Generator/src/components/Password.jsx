import { useCallback, useEffect, useRef, useState } from "react"

export const Password = () => {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(7)
    const [char, setChar] = useState(false)
    const [numb, setNumb] = useState(false)
    const [cop, setCop] = useState(false)


    function lengthPart(event){
        setLength(event.target.value)
    }

    function selectChar(){
        setChar(!char)
    }

    function selectNumber(){
        setNumb(!numb)
    }

    function copyCat(){
        window.navigator.clipboard.writeText(password)
        setCop(!cop)

    }

    const generatePassword = useCallback(()=>{
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyz"

        if (numb) {
            str += "0123456789"
        }
        if (char){
            str += "!@#$%^&*"
        }    
        for (let i = 1; i <= length; i++) {
            const autoSelect = Math.floor(Math.random() * str.length + 1) 
            pass += str.charAt(autoSelect)
        }

        setPassword(pass)
    },[length, numb,char])

    useEffect(()=>{
        generatePassword()
    },[length, numb,char])


  return (
    <div className="MainC">
        <h1>Password Generator</h1>
        <div className="mid">
            <input type="text" placeholder={password} />
            <button onClick={copyCat}>{cop ? "copyed": "Copy"}</button>
        </div>
        <div className="down">
            <input type="range" min={8} max={20} value = {length} onChange={lengthPart}/>
            <p>Length: {length}</p>
            <input type="checkbox" defaultChecked = {numb} onChange={selectNumber}/>
            <p>Numbers</p>
            <input type="checkbox" defaultChecked = {char} onChange={selectChar}/>
            <p>Symbols</p>
        </div>
    </div>
  )
}
