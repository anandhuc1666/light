import React, { useRef, useState } from 'react'

function Newset() {
    const [text, setText] = useState(0)
    const [newt, setNewt] =useState(null)
    const intervalRef = useRef(null)
    const handle = () => {
        if (text === 0) {
            setText(Date.now())
            setNewt(Date.now())
            intervalRef.current = setInterval(() => {
                setText(Date.now())
            }, 10)
        }
        else {
            return clearInterval(intervalRef.current)
        }
    }
    const handlereset =()=>{
        clearInterval(intervalRef.current)
      setNewt(null)
      setText(0)
    }
    const newtimer = (text - newt)/1000
    return (
        <div>
            <h1>new Timer</h1>
            <p>{newtimer}</p>
            <button onClick={handle}>{text === 0 ? "start" : "stop"}</button>
            <button onClick={handlereset}>reset</button>
        </div>
    )
}

export default Newset