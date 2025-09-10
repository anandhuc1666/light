import React, { useState } from 'react'

function Text() {
    const [text, setText] = useState(false)
    const handle = () => {
        setText((pre) => !pre)
    }
      const hello = ["hello" , "new", "one"]
    return (
        <div>
            <button onClick={handle}>word</button>
            <p>{text ? hello : null}</p>
        </div>
    )
}

export default Text