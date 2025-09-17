import React, { useState } from 'react'
import './Colorlight.css'

function Colorlight() {
    const[color,setColor]=useState('gray')
    
  return (
    <div>
        <h1>light</h1>
        <div className={`light ${color? "green":"gray"}`}></div>
        <div className={`light ${color? "yellow" : "gray"}`}></div>
        <div className={`light ${color? "red" : "gray"}`}></div>
    </div>
  )
}

export default Colorlight