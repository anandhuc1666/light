import React, { useEffect, useState } from 'react'
import './Emage.css'

function Emage() {
    const [color, setColor] = useState('gray')
    const [count, setCount] = useState(1)
    useEffect(() => {
        const colors = setInterval(() => {
            setColor((pre) => {
                  if (pre === "gray") {
                     return "green"
        }
                if (pre === "green") return "yellow"
                if (pre === "yellow") return "red"
                if (pre === "red") return "green"

            })

        }, 1000)
        return () => clearInterval(colors)
    }, [])

    return (
        <div>
            <div className={`light ${color === "green" ? "green" : "gray"}`}><h2></h2></div>
            <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}><h2></h2></div>
            <div className={`light ${color === "red" ? "red" : "gray"}`}><h2></h2></div>
        </div>
    )
}

export default Emage