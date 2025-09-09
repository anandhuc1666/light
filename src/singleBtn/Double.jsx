import React, { useRef, useState } from 'react'

function App() {
  const [time,setTime]=useState(0)
  const [now,setNow]=useState(null)
  const intervalRef = useRef(null)

  const handleStart=()=>{
    setNow(Date.now())
    setTime(Date.now())
 intervalRef.current = setInterval(()=>{
      setTime(Date.now())
     },10)
  }
    const handleStop=()=>{
    clearInterval(intervalRef.current)
  }
  const newTimer = (time - now)/1000
  const handleReset =()=>{
    clearInterval(intervalRef.current)
    setNow(null)
    setTime(0)
  }
  return (
    <div>
      <h1>stop watch</h1>
      <h2>{newTimer}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default App
