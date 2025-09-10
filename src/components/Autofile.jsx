import React, { useState } from 'react'

function Autofile() {
    const[text,setText]=useState('')
    const data = ["aaa","dafa", "efwvs","sfcszca","eegsfq"] 
    let newT = data.filter((t,k)=>t==text)
    console.log(data)
    console.log(newT)
  return (
    <div>
       <input type="text" placeholder='enter your text' onChange={(e)=>setText(e.target.value)}/>
       <div>
         <ul>
            {
                newT.map((i,k)=>(
                    <li key={k}>{i}</li>
                ))
            }
         </ul>
       </div>
    </div>
  )
}

export default Autofile