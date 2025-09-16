// import React, { useEffect, useRef, useState } from 'react'

// function CountMul() {
//     const [count, setCount] = useState(0)
//     const intervel = useRef(null)
//     const handle = () => {
//         intervel.current = setInterval(() => {
//             setCount((pre) => pre + 1)
//         }, 1000)
//     }

//     const stop = () => {
//         clearInterval(intervel.current)
//     }

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handle}>+</button>
//             <button onClick={() => stop()}>stop</button>
//         </div>
//     )
// }

// export default CountMul
import React, { useState } from 'react'

function CountMul() {
    const [state, setState] = useState({
        name: "arun",
        age: "20"
    })
    let person = []
    const handle =()=>{
        person.push(...state,)
    }
    return (
        <div>
            <i>{state}</i>
            <input type="text" onChange={(e) => setState(e.target.value)} />
            <button onClick={handle}>send</button>
        </div>
    )
}

export default CountMul