// import React, { useState } from 'react'

// function Autofile() {
//     const[text,setText]=useState('')
//     const data = ["aaa","dafa", "efwvs","sfcszca","eegsfq"] 
//     let newT = data.filter((t,k)=>t==text)
//     console.log(data)
//     console.log(newT)
//   return (
//     <div>
//        <input type="text" placeholder='enter your text' value={text} onChange={(e)=>setText(e.target.value)}/>
//        <div>
//          <ul>
//             {
//                 newT.map((i,k)=>(
//                     <li key={k}>{i}</li>
//                 ))
//             }
//          </ul>
//        </div>
//     </div>
//   )
// }

// export default Autofile
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Promise from './Promise'

function Autofile() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const data = ["aaa", "dafa", "efwvs", "sfcszca", "eegsfq"]
  // let newT = data.filter((t) => t.toLowerCase().includes(text.toLowerCase()))
  let newT = data.filter((i)=>i.includes(text))
  const sendText =()=>{
   navigate('/Autofile/:Promise')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter your text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Link to={`/Product/${newT}`}><button onClick={sendText}>send</button></Link>
      <div>
        <ul>
          {newT.map((i, k) => (
            <li key={k}>{i}</li>
          ))}
        </ul>
      </div>
      <Promise/>
     
    </div>
  )
}

export default Autofile
