// import React, { useState, useEffect } from "react";
// import './App.css'

// function App() {
//   const [active, setActive] = useState("red"); 

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setActive((prev) => {
//         if (prev === "red") return "green";
//         if (prev === "green") return "yellow";
//         if (prev === "yellow") return "red";
//         return "red";
//       });
//     }, 2000); 

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="traffic-light">
//       <div
//         className={`light ${active === "green" ? "green" : "gray"}`}
//       ></div>
//       <div
//         className={`light ${active === "yellow" ? "yellow" : "gray"}`}
//       ></div>
//       <div
//         className={`light ${active === "red" ? "red" : "gray"}`}
//       ></div>
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react'
// import "./App.css"

// function App() {
//   const [active, setActive] = useState("red")
//   useEffect(() => {
//     let interval = setInterval(() => {
//       setActive((pree) => {
//         if (pree === "red") return "green"
//         if (pree === "green") return "yellow"
//         if (pree === "yellow") return "red"
//         return "red"
//       })
//     }, 1000)
//     return () => clearInterval(interval)
//   }, [])
//   return (
//     <div>
//       <div className={`light ${active === "green" ? "green" : "gray"}`}></div>
//       <div className={`light ${active === "yellow" ? "yellow" : "gray"}`}></div>
//       <div className={`light ${active === "red" ? "red" : "gray"}`}></div>

//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [tests, setTexts] = useState([])
  const send = (e) => {
    e.preventDefault();
    setTexts([...tests, text])
    setText("")
  }
  const remove = (index) => {
    setTexts(tests.filter((p,i) => i !== index))
  }
  return (
    <div>
      <h1>add todo</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={send}>add</button>
      <ul>
        {
          tests.map((i, k) => (
            <li key={k}>{i}<button onClick={() => remove(k)}>dle</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default App