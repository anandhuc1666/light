import React, { useContext } from 'react'
import { TextContext } from './CreateContext'

function Pass1() {
    const {text,setText}=useContext(TextContext)
  return (
    <div>
        <h2>{text}</h2>
    </div>
  )
}

export default Pass1