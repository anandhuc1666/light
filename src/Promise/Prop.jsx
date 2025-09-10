import React, { useState } from 'react'
import Prop2 from './Prop2'
import { Link, useNavigate } from 'react-router-dom'

function Prop() {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount((pre) => pre + 1)}>add</button>
            <button onClick={() => setCount((pre) => pre - 1)}>sub</button>
            <Prop2 send={count}/>
            <Link to={`${count}`}><button onClick={()=>navigate('/:Prop3')}>next page</button></Link>
            
        </div>
    )
}

export default Prop