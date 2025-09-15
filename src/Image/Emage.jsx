import React, { useEffect, useState } from 'react'
import './Emage.css'

function Emage() {
    const [color, setColor] = useState('gray')
    const [yellow, setYellow] = useState(0)
    const [red, setRed] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const colors = setInterval(() => {
            setColor((pre) => {
                if (pre === "gray") {
                    return ("green")
                }
                if (pre === "green") return "yellow"
                if (pre === "yellow") return "red"
                if (pre === "red") return "green"

            })


        }, 1000)
        return () => clearInterval(colors)

    }, [])
    const handle = () => {
        setColor("gray")
        setCount(0)
        setYellow((pre) => pre ? pre-1 : 0)
        setRed(0)
    }
    useEffect(() => {
        if (color === "green") {
            setCount((pre) => pre + 1)
        }
        if (color === "yellow") {
            setYellow((pre) => pre + 1)
        }
        if (color === "red") {
            setRed((r) => r + 1)
        }
    }, [color])

    return (
        <div>
            <div className={`light ${color === "green" ? "green" : "gray"}`}><h2>{count}</h2></div>
            <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}><h2>{yellow}</h2></div>
            <div className={`light ${color === "red" ? "red" : "gray"}`}><h2>{red}</h2></div>
            <button onClick={handle}>reset</button>
        </div>
    )
}

export default Emage