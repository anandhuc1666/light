import React, { useRef, useState } from 'react'
import { TimerCount } from './Timer3'
import { useContext } from 'react'

function Timer() {
    const {time,setTime} = useContext(TimerCount)
    const [nows, setNows] = useState(null)
    const intervalRef = useRef(null)
    const handle = () => {

        if (time === 0) {
            setTime(Date.now())
            setNows(Date.now())
            intervalRef.current = setInterval(() => {
                setTime(Date.now())
            }, 10)
        }
        else {
            clearInterval(intervalRef.current)
        }
    }
    const newTimer = (time - nows) / 1000
    const handleReset = () => {
        clearInterval(intervalRef.current)
        setNows(null)
        setTime(0)
    }
    return (
        <div style={{background:"blue",color:'white'}}>
            <h1>New timer set</h1>
            <h2>{newTimer}</h2>
            <button onClick={handle}>{time === 0 ? "start" : "stop"}</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Timer