import React, { useState } from 'react'

function Final() {
    const [color,setColor]=useState("gray")
    const value = setInterval(()=>{
      setColor((value)=>{
         if(value==="gray")return"green"
         if(value==="green")return"yellow"
         if(value==="yellow")return"red"
         if(value==="red")return"green"
      })
      return ()=> clearInterval(value)
    },1000)
  return (
    <div>
        <div className={`light ${color==="green"?"green":"gray"}`}></div>
        <div className={`light ${color==="yellow"?"yellow":"gray"}`}></div>
        <div className={`light ${color==="red"?"red":"gray"}`}></div>
    </div>
  )
}

export default Final