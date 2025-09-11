import React, { useState } from 'react'

function Final() {
    const [color,setColor]=useState("gray")
  return (
    <div>
        <div className={`light ${color==="green"?"green":"gray"}`}></div>
        <div className={`light ${color==="yellow"?"yellow":"gray"}`}></div>
        <div className={`light ${color==="red"?"red":"gray"}`}></div>
    </div>
  )
}

export default Final