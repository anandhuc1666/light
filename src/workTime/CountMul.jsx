// import React, { useEffect, useRef, useState } from 'react'

// function CountMul() {
//     const [count, setCount] = useState(0)
//     const intervel = useRef(null)
//     const handle = () => {
//         intervel.current = setInterval(() => {
//             setCount((pre) => pre + 1)
//         }, 1000)
//     }

//     const stop = () => {
//         clearInterval(intervel.current)
//     }

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handle}>+</button>
//             <button onClick={() => stop()}>stop</button>
//         </div>
//     )
// }

// export default CountMul
import React, { useState } from 'react';

function CountMul() {
  const [state, setState] = useState({
    name: "",
    age: ""
  });

  const [people, setPeople] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    setPeople((prev) => [...prev, state]);
    setState({ name: "", age: "" }); 
  };
  const dle =(index)=>{
   setPeople((prev) => prev.filter((_, k) => k !== index));
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Enter age"
        value={state.age}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Send</button>

      <h3>People List:</h3>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} {person.age}
            <button onClick={()=>dle(index)}>dle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountMul;
