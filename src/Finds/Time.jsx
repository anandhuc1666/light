import React, { useRef, useState } from 'react'

function Time() {
    const [time, setTime] = useState(0)
    const [nows, setNows] = useState(null)
    const intervalref = useRef(null)
    const handle = () => {
        if (time === 0) {
            setTime(Date.now())
            setNows(Date.now())
            intervalref.current = setInterval(() => {
                setTime(Date.now())
            })
        } else {
            return clearInterval(intervalref.current)
        }
    }
    const newTimer = (time - nows) / 1000
    const handleReset = () => {
        clearInterval(intervalref.current)
        setNows(null)
        setTime(0)
    }
    return (
        <div>
            <h1>set time</h1>
            <h2>{newTimer}</h2>
            <button onClick={handle}>start</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Time