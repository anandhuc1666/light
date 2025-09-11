import React, { useEffect, useState } from 'react'

function Final() {
  const [color, setColor] = useState("gray")
  useEffect(() => {
    const value = setInterval(() => {
      setColor((value) => {
        if (value === "gray") return "green"
        if (value === "green") return "yellow"
        if (value === "yellow") return "red"
        if (value === "red") return "green"
      })

    }, 1000)
    return () => clearInterval(value)
  })
  return (
    <div>
      <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
      <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
      <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
    </div>
  )
}

export default Final