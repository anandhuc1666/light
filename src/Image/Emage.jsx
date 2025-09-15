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
import React, { useMemo, useState } from 'react'

function Emage() {
     const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalc = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e8; i++) {} // simulate heavy work
    return num * 2;
  };

  // ✅ only recalculates when count changes
  const double = useMemo(() => expensiveCalc(count), [count]);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
      <h2>Double: {double}</h2>
    </div>
  );
}

export default Emage