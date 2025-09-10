import React, { useContext, useEffect} from 'react'
import './light.css'
import { ColorTheme } from './Light3'

function light1() {
    const { color, setColor } = useContext(ColorTheme)
    useEffect(() => {
        const iniset = setInterval(() => {
            setColor((ini) => {
                if (ini === "gray") return "green"
                if (ini === "green") return "yellow"
                if (ini === "yellow") return "red"
                if (ini === "red") return "green"
            })
        }, 1000)
        return () => iniset(clearInterval)
    }, [])
    return (
        <div>
            <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
            <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
            <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
        </div>
    )
}

export default light1