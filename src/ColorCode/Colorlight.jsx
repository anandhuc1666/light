import React, { useEffect, useState } from 'react'
import './Colorlight.css'

function Colorlight() {
    const [color, setColor] = useState('gray')
    const [count,setCount] = useState(0)
    useEffect(() => {
        const cols = setInterval(() => {
            setColor((pass) => {
                if (pass === "gray") return "green"
                if (pass === "green") return "yellow"
                if (pass === "yellow") return "red"
                if (pass === "red") return "green"
            })
        }, 1000)
        return () => clearInterval(cols)
    }, [])
 useEffect(()=>{
    if(color !== "green")return
    setCount((pre)=>pre +1)
 },[color])
    return (
        <div>
            <h1>light</h1>
            <div className={`light ${color === "green" ? "green" : "gray"}`}></div> <h2>color green count:{count}</h2>
            <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
            <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
        </div>
    )
}

export default Colorlight