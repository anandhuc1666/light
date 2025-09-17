import React from 'react'
import { useContext } from 'react'
import { TextContext } from './CreateContext'

function Pass2() {
    const {text,setText}=useContext(TextContext)
    const handle =()=>{
        setText('/Pass1')
    }
  return (
    <div>
        <h2>{text}</h2>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handle}>send</button>
    </div>
  )
}

export default Pass2