import React, { useState } from 'react'

function Word() {
    const [word, setWord] = useState("")
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