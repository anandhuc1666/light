import React from 'react'
import { WordContext } from './Word3'
import { useState } from 'react'
import Word from './Word'

function Word2() {
    const [word, setWord] = useState("")
    return (
        <div>
            <WordContext.Provider value={{ word, setWord }}>
                <Word />
            </WordContext.Provider>
        </div>
    )
}

export default Word2