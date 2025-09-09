import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function S1() {
    const[text,setText]=useState('')

  return (
    <div>
        <h1>text enter:</h1>
        <input type="text"  onChange={(e)=>setText(e.target.value)} placeholder='enter a text:'/>
        
        <Link to={`/P1/${text}`}><button>next</button></Link>
        <p>{text}</p>
    </div> 
  )
}

export default S1