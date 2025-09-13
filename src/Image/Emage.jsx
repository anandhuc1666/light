// import { useState } from "react";

// function Emage() {
//   const [count, setCount] = useState(0);
//   const [images, setImages] = useState([]);

//   const handle = () => {
//     const num = parseInt(count);
//     if (!isNaN(num) && num > 0) {
//       const newImages = Array(num).fill(
//         "https://via.placeholder.com/100" 
//       );
//       setImages(newImages);
//     } else {
//       setImages([]);
//     }

//   };

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Enter number"
//         value={count}
//         onChange={(e) => setCount(e.target.value)}
//       />
//       <button onClick={handle}>Send</button>

//       <div style={{ marginTop: "20px" }}>
//         {images.map((img, index) => (
//           <img key={index} src={img} alt="display" style={{ margin: "5px" }} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Emage;
// import React, { useState } from 'react'
// import svg from '../Image/vite.svg'
// function Emage() {
//   const[image,setImage]=useState(0)
//   const[demo,setDemo]=useState([])
//   const handle=()=>{
//     let num = image
//     for(let i=0;i<num;i++){
//       if(num>0){
//         let number = parseInt(num)
//         let newnum = Array(number).fill(svg)
//        setDemo(newnum)
//       }
//       else{
//         return []
//       }
//     }
//   }
//   return (
//     <div>
//       <input type="text" placeholder='number' value={image} onChange={(e)=>setImage(e.target.value)}/>
//       <button onClick={handle}>send</button>
//       {
//         demo&&
//         demo.map((i,k)=>(
//           <img src={i} alt="" key={k}/>
//         ))
//       }
//     </div>
//   )
// }

// export default Emage
// import React, { useState } from 'react'
// import svg from '../Image/vite.svg'
// function Emage() {
//   const [image,setImage]=useState(0)
//   let num = []
//   for(let i=0;i<image;i++){
//     num.push(<img src={svg} alt="" />)
//   }
//   return (

//     <div>
//       <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
//       {
//         num.map((i)=>(
//           <div>{i}</div>
//         ))
//       }
//     </div>
//   )
// }

// export default Emage
// import React, { useRef, useState } from 'react'
// import svg from '../Image/vite.svg'
// import { array } from 'i/lib/util'

// function Emage() {
//   const [count, setCount] = useState(0)
//   const intervel = useRef(null)
//   const handleStart = () => {
//     intervel.current = setInterval(() => {
//       setCount((pre) => pre >= 5 ? 5 : pre + 1)

//     }, 500)
//   }
//   const handleStop = () => {
//     clearInterval(intervel.current)
//   }
//   const handleReset = () => {
//     clearInterval(intervel.current)
//     setCount(0)
//   }
//   let Newimag = []
//   for (let i = 0; i < count; i++) {
//     Newimag.push(<img src={svg} alt="" />)
//   }
// let numberss = count===5?5*3:null 
//   return (
//     <div>
//       <h1>timer</h1>
//       <h2>{count}</h2>
//       <p>{numberss}</p>
//       <p>{count===5?"number is full": null}</p>
//       <button onClick={handleStart}>start</button>
//       <button onClick={handleStop}>stop</button>
//       <button onClick={handleReset}>reset</button>
//       {
//         Newimag.map((i) => (
//           <div>{i}</div>
//         ))
//       }

//     </div>
//   )
// }

// export default Emage
// import React, { useEffect, useState } from 'react'
// import './Emage.css'
// function Emage() {
//   const [color, setColor] = useState("gray")
//   useEffect(() => {
//     let nuColor = setInterval(() => {
//       setColor((pre) => {
//         if (pre === "gray")return "green"
//         if(pre === "green")return "yellow"
//         if(pre === "yellow")return "red"
//         if(pre === "red")return "green"
//      })
//     }, 1000)
//    return()=> clearInterval(nuColor)
//   }, [])
//   return (
//     <div>
//       <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
//       <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
//       <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
//     </div>
//   )
// }

// export default Emage
