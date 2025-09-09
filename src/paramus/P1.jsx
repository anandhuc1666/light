import React from 'react'
import { useParams } from 'react-router-dom'

function P1() {
    const { text } = useParams()
    return (
        <div>
            <p>
                {text}
            </p>
        </div>
    )
}

export default P1