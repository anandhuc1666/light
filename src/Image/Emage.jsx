// import React, { useEffect, useRef, useState } from 'react'
// import './Emage.css'

// function Emage() {
//     const [color, setColor] = useState('gray')
//     const [yellow, setYellow] = useState(0)
//     const [red, setRed] = useState(0)
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         const colors = setInterval(() => {
//             setColor((pre) => {
//                 if (pre === "gray") {
//                     return ("green")
//                 }
//                 if (pre === "green") return "yellow"
//                 if (pre === "yellow") return "red"
//                 if (pre === "red") return "green"

//             })


//         }, 1000)
//         return () => clearInterval(colors)

//     }, [])
//     const handle = () => {
//         setColor("gray")
//         setCount(0)
//         setYellow((pre) => pre ? pre-1 : 0)
//         setRed(0)
//     }
//     useEffect(() => {
//         if (color === "green") {
//             setCount((pre) => pre + 1)
//         }
//         if (color === "yellow") {
//             setYellow((pre) => pre + 1)
//         }
//         if (color === "red") {
//             setRed((r) => r + 1)
//         }
//     }, [color])

//     return (
//         <div>
//             <div className={`light ${color === "green" ? "green" : "gray"}`}><h2>{count}</h2></div>
//             <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}><h2>{yellow}</h2></div>
//             <div className={`light ${color === "red" ? "red" : "gray"}`}><h2>{red}</h2></div>
//             <button onClick={handle}>reset</button>
//         </div>
//     )
// }

// export default Emage

// import React, { useState } from 'react'
// import Emage2 from './Emage2'

// function Emage() {
//     const [count,setCount]=useState('')
//     const handle=()=>{
//         setCount("anandhu")
//     }
//   return (
//     <div>
//         {/* passing a props to the child component and it reduer in one time if re-redure the props to change */}
//         <button onClick={handle}>send</button>
//         <h2>name: {`${count ? count + ' c' : ''} `}</h2>
//         <Emage2 name={count}/>
//     </div>
//   )
// }

// export default Emage
// import React, { useMemo, useState } from 'react'

// function Emage() {
//     const[count, setCount]=useState(0)
//       const expensiveCalc = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1e8; i++) {} // simulate heavy work
//     return num * 2;
//   };
//   const double = useMemo(()=>expensiveCalc(count),[count]) 
//   return (
//     <div>
//         <button onClick={()=>setCount((pre)=>pre+1)}>add</button>
//         <h2>{count}</h2>
//     </div>
//   )
// }

// export default Emage
// import React, { useCallback, useState } from 'react'
// import Emage2 from './Emage2'

// function Emage() {
//     const [count, setCount] = useState(0)
//     const handle = useCallback(() => {
//         setCount((pre) => pre )
//     }, [])
//     console.log(`page one: ${count}`)
//     return (
//         <div>
//             <button onClick={handle}>add</button>
//             <Emage2 count={count}/>
//         </div>
//     )
// }

// export default Emage
// import React, { useCallback, useMemo, useState } from 'react'
// import svg from '../Image/vite.svg'

// function Emage() {
//     const [text, setText] = useState(0)
//     const [count, setCount] = useState(0)
//     const [image, setImage] = useState([])

//     const send = useCallback(() => {
//         let newimage = parseInt(text)
//         setImage(Array(newimage).fill(svg))
//         setCount(text)
//     })
//     console.log(count)

//     return (
//         <div>
//             <input type="text" onChange={(e) => setText(e.target.value)} />
//             <h2>{count}</h2>
//             <button onClick={send}>send</button>
//             {
//                 image &&
//                 image.map((i, k) => (
//                     <div key={k}><img src={i} alt="" /></div>
//                 ))
//             }
//         </div>
//     )
// }

// export default Emage
// import React, { useState } from 'react'
//  import svg from '../Image/vite.svg'

// function Emage() {
//     const[image,setImage]=useState(0)
//     let sum=[]
//     const handle =(e)=>{
//        setImage(e.target.value) 
//     }
//     for(let i=1;i<=image;i++){
//         sum.push(<img src={svg} alt="" />) 
//     }

//   return (
//     <div>
//         <input type="text" onChange={handle}/>
      
//         {
//             sum.map((i)=>(
//                 <div>{i}</div>
//             ))
//         }
//     </div>
//   )
// }

// export default Emage

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Emage() {
    const[text,setText]=useState('')
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <p>{text}</p>
        <Link to={`/${text}`}>new page2</Link>
    </div>
  )
}

export default Emage