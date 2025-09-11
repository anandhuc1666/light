import React, { useRef, useState } from 'react'

function Time() {
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)
    const [now, setNow] = useState(null)
    const handle = () => {

        if (time === 0) {
            setTime(Date.now())
            setNow(Date.now())
            intervalRef.current = setInterval(() => {
                setTime(Date.now())
            }, 10)
        } else {
            clearInterval(intervalRef.current)
        }
    }
    const newtime = (time - now)/1000
const handlereset=()=>{
     clearInterval(intervalRef.current)
     setNow(null)
     setTime(0)
}

    return (
        <div>
            <h1>Time set</h1>
            <h2>{newtime}</h2>
            <button onClick={handle}>{time === 0 ? "start" : "stop"}</button>
            <button onClick={handlereset}>reset</button>
        </div>
    )
}

export default Time