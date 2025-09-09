// import React, { useEffect, useState } from 'react'
// import './App.css'
// function App() {
//   const[color,setColor]=useState("gray")
//   useEffect(()=>{
//    const interval= setInterval(()=>{
//       setColor((pree)=>{
//          if (pree==="gray") {
//           return "green"
//          }
//          if (pree==="green") {
//           return "yellow"
//          }
//          if (pree==="yellow") {
//           return "red"
//          }
//          if(pree==="red"){
//           return "green"
//          }
//       })
//    },1000)
//    return ()=>clearInterval(interval)
//   },[])
//   return (
//     <div>
//       <div className={`light ${color==="green"?"green":"gray"}`}></div>
//       <div className={`light ${color==="yellow"?"yellow":"gray"}`}></div>
//       <div className={`light ${color==="red"?"red":"gray"}`}></div>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// function App() {
//   const[text,setText]=useState('')
//   const[texts,setTexts]=useState([])
// const handle =(e)=>{
// e.preventDefault()
// setTexts([...texts,text])
// setText('')
// }
// const dlet=(k)=>{
//   setTexts(texts.filter((_,p)=>p!==k))
// }
//   return (
//     <div>
//       <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
//       <button onClick={handle}>send</button>
//       <ul>
//         {
//           texts.map((i,k)=>(
//             <li key={k}>{i}<button onClick={()=>dlet(k)}>dlet</button></li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App
// import React, { useState, useEffect, useRef } from 'react'

// function Stopwatch() {
//   const [time, setTime] = useState(0)   // time in ms
//   const [isRunning, setIsRunning] = useState(false)
//   const intervalRef = useRef(null)

//   useEffect(() => {
//     if (isRunning) {
//       intervalRef.current = setInterval(() => {
//         setTime((prev) => prev + 10)   // increase by 10ms
//       }, 10)
//     } else {
//       clearInterval(intervalRef.current)
//     }

//     return () => clearInterval(intervalRef.current)
//   }, [isRunning])

//   const startStop = () => {
//     setIsRunning(!isRunning)
//   }

//   const reset = () => {
//     clearInterval(intervalRef.current)
//     setIsRunning(false)
//     setTime(0)
//   }


//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60000)
//     const seconds = Math.floor((time % 60000) / 1000)
//     const milliseconds = Math.floor((time % 1000) / 10)

//     return (
//       String(minutes).padStart(2, '0') + ":" +
//       String(seconds).padStart(2, '0') + ":" +
//       String(milliseconds).padStart(2, '0')
//     )
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>⏱ Stopwatch</h1>
//       <h2>{formatTime(time)}</h2>
//       <button onClick={startStop}>
//         {isRunning ? "Stop" : "Start"}
//       </button>
//       <button onClick={reset} style={{ marginLeft: "10px" }}>
//         Reset
//       </button>
//     </div>
//   )
// }

// export default Stopwatch

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
