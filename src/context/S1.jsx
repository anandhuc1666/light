import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import P2 from '../paramus/P2'

function S1() {
    const[text,setText]=useState('')

  return (
    <div>
        <h1>text enter:</h1>
        <input type="text"  onChange={(e)=>setText(e.target.value)} placeholder='enter a text:'/>
        
        <Link to={`/P1/${text}`}><button>next</button></Link>
        <p>{text}</p>
        <P2/>
        <Link to={`/P2`} state={{news:text}}><button>next p2</button></Link>
    </div> 
  )
}

export default S1