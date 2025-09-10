import React, { useState } from 'react'
import { WordContext } from './Word3'
import { useContext } from 'react'

function Word() {
    const {word,setWord} = useContext(WordContext)
    const Text = [
        "apple",
        "tree",
        "plant",
        "chips",
        "micro",
        "macro",
        "large",
        "small",
        "orenge",
        "flower"
    ]
    const finder = Text.filter((i)=>i.includes(word))
    return (
        <div>
            <h1>Word craft</h1>
            <p>{word}</p>
            <input type="text" value={word} placeholder='enter a word' onChange={(e) => setWord(e.target.value)} />
            <ul>
                {
                   finder.map((p,k)=>(
                    <li key={k}>{p}</li>
                   )) 
                }
            </ul>
        </div>
    )
}

export default Word