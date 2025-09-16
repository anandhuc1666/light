import React, { useEffect, useRef, useState } from 'react'

function CountMul() {
    const [count, setCount] = useState(0)
    const intervel = useRef(null)

  

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>+</button>
            <button onClick={()=>stop()}>stop</button>
        </div>
    )
}

export default CountMul