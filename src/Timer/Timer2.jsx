import { useState } from 'react'
import { TimerCount } from './Timer3'
import Timer from './Timer'

function Timer2() {
     const [time, setTime] = useState(0)
  return (
    <div style={{background:'yellow', width:200,height:500}}>
    < TimerCount.Provider value={{time,setTime}}>
    <Timer/>
    </TimerCount.Provider>
    tcfgvbhknlygvhjk
    </div>
  )
}

export default Timer2