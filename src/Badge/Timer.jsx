// import React, { useRef, useState } from 'react'

// function Timer() {
//   const [time, setTime] = useState(0)
//   const [nowt, setnowt] = useState(null)
//   let intervel = useRef(null)
  // const start = () => {
  //   intervel.current = setInterval(() => {
  //     setTime((pass) => pass + 1)
  //   }, 1000)
  // }
  // const stop =()=>{
  //  clearInterval(intervel.current)
  // }
  // const reset =()=>{
  //  clearInterval(intervel.current)
  //  setTime(0)
  // }
//   const start = () => {
//     if (time === 13) {
//       setnowt(Date.now())
//       setTime(Date.now())
//       intervel.current = setInterval(() => {
//         setTime(Date.now())
//       }, 10)
//     } else {
//       clearInterval( intervel.current)
//     }

//   }
//   const reset = () => {
//     clearInterval(intervel.current)
//     setTime(0)
//     setnowt(null)
//   }
//   const newTIme = (time - nowt) / 1000
//   return (
//     <div>
//       <h2>your time</h2>
//       <h2>{newTIme}</h2>
//       <button onClick={start}>{time === 0 ? "start" : "stop"}</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default Timer
// import React, { useState } from 'react'
// import svg from '../assets/react.svg'
// import { CreateTime } from './CreateTime'
// import { useContext } from 'react'
// import { Link } from 'react-router-dom'

// function Timer() {
//   const 
//    const {text, setText}= useContext(CreateTime)
//   let number = []
//   for(let i = 0; i<text; i++){
//     number.push(<img src={svg} alt="" />)
//   }
//   const newpage =()=>{
//     navigate('/Timer2')
//   }
//   return (
//     <div>
//       <input type="text" onChange={(e)=>setText(e.target.value)}/>
//       {
//         number.map((i,k)=>(
//           <div key={k}>{i}</div>
//         ))
//       }
//      <button onClick={newpage}>new page</button>
//     </div>
//   )
// }

// export default Timer
// import React, { useEffect, useRef, useState } from 'react'
// import './Timer.css'

// function Timer() {
//   const [color,setColor] = useState('gray')
//   const [count, setCount]=useState(0)
//   const [counts, setCounts]=useState(null)
//   const intervel = useRef(null)
//   useEffect(()=>{
    
//    intervel.current = setInterval(()=>{
//     setColor((pre)=>{
//       if(pre === "gray")return "green"
//       if(pre === "green")return "yellow"
//       if(pre === "yellow")return "red"
//       if(pre === "red")return "green"
      
//     })
//     setCount((pre)=> pre === 4 ? clearInterval(intervel.current) : pre + 1)
//    },1000)
  
//   },[])
//   setTimeout(()=>{
//      setCounts((pre)=>pre === 5? 'count is full : 5' : null)
//   },5000)
// console.log(count)
//   return (
//     <div>
//       <h2>{count === 4 ? 'count is full : 5' : count}</h2>
//       <h2>{counts}</h2>
//       <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
//       <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
//       <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
//     </div>
//   )
// }

// export default Timer