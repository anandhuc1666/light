import React from 'react'
import { useState } from 'react'
import { ColorTheme } from './Light3'
import Light1 from './Light1'

function Light2() {
      const [color, setColor] = useState("gray")
  return (
    <div>
      <ColorTheme.Provider value={{color, setColor}}>
        <Light1/>
      </ColorTheme.Provider>
    </div>
  )
}

export default Light2