import React, { useEffect, useState } from 'react'

function Emage() {
    const [color, setColor] = useState('gray')
    useEffect(() => {
        const colors = setInterval(() => {
            setColor((pre) => {
                if (pre === "gray") return "green"
                if (pre === "green") return "yellow"
                if (pre === "yellow") return "red"
                if (pre === "red") return "green"
            })
        }, 1000)
        return () => clearInterval(colors)
    }, [])
    return (
        <div>
            <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
            <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
            <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
        </div>
    )
}

export default Emage