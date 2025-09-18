import React, { useRef } from 'react'
import { useState } from 'react'

function FirstCount() {
    const [count, setCount] = useState(0)
    let newTimer = useRef(null)
    const handle = () => {
        newTimer.current = setInterval(() => {
            setCount((pre) => pre === 10 ? 10 : pre + 1)
        }, 1000)
    }
    const stop = () => {
        clearInterval(newTimer.current)
    }

    return (
        <div>
            <h2>{count === 10 ? null : count}</h2>
            <p>{count===10 ? `number is full: ${count}` : null}</p>
            <button onClick={handle}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}

export default FirstCount