import React, { useContext } from 'react'
import { CreateCount } from './Context3'

function Context() {

     const { count, setCount } = useContext(CreateCount)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount((pree)=>pree+1)}>add</button>
        <button onClick={()=>setCount((pree)=>pree-1)}>sub</button>
    </div>
  )
}

export default Context