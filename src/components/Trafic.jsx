import React, { useEffect, useRef, useState } from 'react'
import './Trafic.css'

function Trafic() {
    const [color, setColor] = useState('gray')
    useEffect(() => {
        const interval = setInterval(() => {
            setColor((pre) => {
                if (pre === "gray") return "green"
                if (pre === "green") return "yellow"
                if (pre === "yellow") return "red"
                if (pre === "red") return "green"
            })

        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const [time, setTime] = useState(0)
    const [now, setnow] = useState(null)
    const intervalRef = useRef(null)

    const handle = () => {

        if (time === 0) {
            setnow(Date.now())
            setTime(Date.now())
            intervalRef.current = setInterval(() => {
                setTime(Date.now())
            }, 10)
        }
        else {
           clearInterval(intervalRef.current)
        }

    }
    const newTime = (time - now) / 1000
    const handleReset = () => {
        clearInterval(intervalRef.current)
        setTime(0)
        setnow(null)
    }

    return (
        <>
            <div>
                <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
                <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
                <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
            </div>
            <div>
                <h1>set timer</h1>
                <h2>{newTime}</h2>
                <button onClick={handle}>{time === 0 ? "start" : "stop"}</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </>
    )
}

export default Trafic