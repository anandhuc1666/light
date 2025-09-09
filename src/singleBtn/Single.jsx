
import React, { useRef } from 'react'
import { useState } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)
  const handle = () => {
    if (time === 0) {
              setNow(Date.now)
        setTime(Date.now)
      intervalRef.current = setInterval(() => {

        setTime(Date.now())
      }, 10)
    } else {
     clearInterval(intervalRef.current)
    }
  }
  const newTimer = (time - now)/1000
  const reset =()=>{
    clearInterval(intervalRef.current)
    setNow(null)
    setTime(0)
  }
  return (
    <div>
      <h1>stop time</h1>
      <h3>{newTimer}</h3>
      <button onClick={handle}>{time ===0 ? "start" : "stop"}</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App
