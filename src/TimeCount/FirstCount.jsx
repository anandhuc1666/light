// import React, { useRef } from 'react'
// import { useState } from 'react'

// function FirstCount() {
//     const [count, setCount] = useState(0)
//     let newTimer = useRef(null)
//     const handle = () => {
//         newTimer.current = setInterval(() => {
//             setCount((pre) => pre === 10 ? 10 : pre + 1)
//         }, 1000)
//     }
//     const stop = () => {
//         clearInterval(newTimer.current)
//     }

//     return (
//         <div>
//             <h2>{count === 10 ? null : count}</h2>
//             <p>{count===10 ? `number is full: ${count}` : null}</p>
//             <button onClick={handle}>start</button>
//             <button onClick={stop}>stop</button>
//         </div>
//     )
// }

// export default FirstCount
import React, { useEffect, useRef, useState } from 'react'
import './FirstCount.css'

function FirstCount() {
    const [color, setColor] = useState('gray')
    let newTime = useRef(null)
    useEffect(() => {
        newTime.current = setInterval(() => {
            setColor((pre) => {
                if (pre === 'gray') return 'green'
                if (pre === 'green') return 'yellow'
                if (pre === 'yellow') return 'red'
                if (pre === 'red') return 'green'
            })
        }, 1000)
    }, [])
    const handle =()=>{
        clearInterval(newTime.current)
    }
    const start =()=>{
         newTime.current = setInterval(() => {
            setColor((pre) => {
                if (pre === 'gray') return 'green'

            })
        }, 1000)
    }
    return (
        <div>
            <div className={`light ${color === 'green' ? 'green' : 'gray'}`}></div>
            <div className={`light ${color === 'yellow' ? 'yellow' : 'gray'}`}></div>
            <div className={`light ${color === 'red' ? 'red' : 'gray'}`}></div>
            <button onClick={handle}>stop</button>
            <button onClick={start}>start</button>
        </div>
    )
}

export default FirstCount