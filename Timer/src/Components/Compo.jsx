import { useState, useRef, useEffect} from "react"

const Compo = () => {
    const[running, setRunning] = useState(false)
    const[time, setTime] = useState(0)
    const intervalRef = useRef(null)
    const startRef = useRef(0)


    useEffect(()=>{
        if (running){
            intervalRef.current =  setInterval(() => {
                setTime(Date.now() - startRef.current)
            },10)
        }
        return () => {
            clearInterval(intervalRef.current)
        }
    },[running])

    function Start(){
        setRunning(true)
        startRef.current = Date.now() - time

    }

    function Stop(){
        setRunning(false)
    }

    function Reset(){
        setRunning(false) 
        setTime(0)      
    }
    
    function formatTime(){
        // let hours = Math.floor(time / (1000 * 60 * 60))
        let min = Math.floor(time / (1000 * 60) % 60)
        let sec = Math.floor(time / (1000) % 60)
        let mili = Math.floor((time % 1000) / 10)

        min = String(min).padStart(2,"0")
        sec = String(sec).padStart(2,"0")
        mili = String(mili).padStart(2,"0")

        return (
           `${min}:${sec}:${mili}`
        )
        
    }

    


  return (
    <div className="main">
        <div>
            <h4>{formatTime()}</h4>
        </div>
        <div className="but">
            <button className="start" onClick={Start}>Start</button>
            <button className="Stop" onClick={Stop}>Stop</button>
            <button className="Reset" onClick={Reset}>Reset</button>
        </div>
    </div>
  )
}

export default Compo