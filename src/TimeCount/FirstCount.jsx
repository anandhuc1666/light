import React, { useRef } from 'react'
import { useState } from 'react'

function FirstCount() {
    const [count, setCount] = useState(0)
    let newTimer = useRef(null)
    const handle = () => {
        newTimer = setInterval(() => {
            setCount((pre) => {
                pre + 1
            })
        }, 1000)
    }
const stop =()=>{
    clearInterval(newTimer)
}

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}

export default FirstCount