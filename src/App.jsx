import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("gray")
  useEffect(()=>{
    const interval = setInterval(()=>{
      setColor ((pree)=>{
        if(pree==="gray")return "green"
        if(pree==="green")return "yellow"
        if(pree==="yellow")return "red"
        if(pree==="red")return "green"
      })
    },1000)
    return ()=>clearInterval(interval)
  },[])
  return (
    <div>
      <div className={`div ${color==="green"?"green":"gray"}`}></div>
      <div className={`div ${color==="yellow"?"yellow":"gray"}`}></div>
      <div className={`div ${color==="red"?"red":"gray"}`}></div>
    </div>
  )
}

export default App