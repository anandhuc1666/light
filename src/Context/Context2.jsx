import React, { createContext, useState } from 'react'
import Context from './Context'
import { CreateCount } from './Context3'

function Context2() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <CreateCount.Provider value={{ count, setCount }}>
                <Context />
            </CreateCount.Provider>
        </div>
    )
}

export default Context2