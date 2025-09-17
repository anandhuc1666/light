import React from 'react'
import { useContext } from 'react'
import { TextContext } from './CreateContext'
import { useNavigate } from 'react-router-dom'

function Pass2() {
    const navigate =useNavigate()
    const { text, setText } = useContext(TextContext)
    const handle = () => {
        navigate("/Pass1")
    }
    return (
        <div>
            <h2>{text}</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handle}>send</button>
        </div>
    )
}

export default Pass2