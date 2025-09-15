import React, { useState } from 'react'

function Todo() {
    const [text, setText] = useState('')
    const [todo, setTodo] = useState([])
    const handle = () => {
        setTodo([...todo, text])
    }
    const dle = (k) => {
        setTodo.filter((i, k) => k !== k)
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handle}>send</button>
            {
                todo.map((i, k) => (
                    <li key={k}>{i} <button onClick={() => dle(k)}>dle</button></li>
                ))
            }
        </div>
    )
}

export default Todo