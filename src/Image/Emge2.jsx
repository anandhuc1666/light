import React from 'react'
import './Emage.css'
import { useState } from 'react'
import { CreateCount } from './Context'
import Emage from './Emage'
function Emge2() {
    const [count, setCount]=useState(0)
  return (
    <div style={{backgroundColor:'gray'}}>Emge2
    <h2>{count}</h2>
    <button onClick={()=>setCount((pre)=>pre+1)}>+</button>
    <Emage text={count}/>
    </div>
  )
}

export default Emge2