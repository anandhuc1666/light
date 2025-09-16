import React, { useEffect, useRef, useState } from 'react'

function CountMul() {
    const [count, setCount] = useState(0)
    const intervel = useRef(null)
    const handle = () => {
        intervel.current = setInterval(() => {
            setCount((pre) => pre + 1)
        }, 1000)
    }

    const stop = () => {
        clearInterval(intervel.current)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>+</button>
            <button onClick={() => stop()}>stop</button>
        </div>
    )
}

export default CountMul