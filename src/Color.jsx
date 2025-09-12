// import React, { useEffect, useState } from "react";
// import "./Color.css";

// function Color() {
//   const [color, setColor] = useState("gray");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setColor((prev) => {
//         if (prev === "gray") return "green";
//         if (prev === "green") return "yellow";
//         if (prev === "yellow") return "red";
//         if (prev === "red") return "green";
//         return "gray";
//       });
//     }, 1000);

//     return () => clearInterval(interval); // cleanup correctly
//   }, []);

//   return (
//     <div>
//       <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
//       <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
//       <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
//     </div>
//   );
// }

// export default Color;
import {useRef, useState} from "react"

export default function App() {
    const [timer,setTimer]=useState(0)
    const intervel = useRef(null)
    const handleStart=()=>{
       intervel.current = setInterval(()=>{
          setTimer(pre=>pre>=30 ? 30:pre+1)
        },500)
    }
    const handleStop=()=>{
       clearInterval(intervel.current)
    }
  return <div  className="parentcontainer">
      <h1>{timer}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop} style={{marginLeft:5}}> Stop</button>
  </div>
}
