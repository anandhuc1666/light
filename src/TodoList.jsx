// import React, { useState } from 'react'

// function TodoList() {
//     let [taskInput, setTaskInput] = useState("")       
//     let [tasks, setTasks] = useState([])               
//     let [editIndex, setEditIndex] = useState(null)    
//     let [editText, setEditText] = useState("")         

//     function edit(text, index) {
//         setEditIndex(index)
//         setEditText(text)
//     }

//     function dlt(indexToDelete) {
//         setTasks(prev => prev.filter((_, i) => indexToDelete !== i))
//     }

//     function save(index) {
//         let updated = [...tasks]
//         updated[index] = editText
//         setTasks(updated)
//         setEditIndex(null)
//         setEditText("")
//     }

//     return (
//         <>
//             <input 
//                 type="text" 
//                 value={taskInput} 
//                 onChange={(e) => setTaskInput(e.target.value)} 
//             />
//             <button onClick={() => setTasks(prev => [...prev, taskInput])}>add</button>
//             <ul>
//                 {tasks.map((task, i) => {
//                     return <li key={i}>
//                         {i === editIndex ? (
//                             <>
//                                 <input 
//                                     type="text" 
//                                     value={editText} 
//                                     onChange={(e) => setEditText(e.target.value)} 
//                                 />
//                                 <button onClick={() => save(i)}>save</button>
//                             </>
//                         ) : (
//                             <>
//                                 {task}
//                                 <button onClick={() => dlt(i)}>dlt</button>
//                                 <button onClick={() => edit(task, i)}>edit</button>
//                             </>
//                         )}
//                     </li>
//                 })}
//             </ul>
//         </>
//     )
// }

// export default TodoList
import React from 'react'
import { useState } from 'react'

function TodoList() {
    let [taskInput, setTaskInput] = useState("")       
    let [tasks, setTasks] = useState([])               
    let [editIndex, setEditIndex] = useState(null)    
    let [editText, setEditText] = useState("")  
    const edit=(task,index)=>{
         setEditIndex(index)

         setEditText(task)
    }
    const save =(index)=>{
       let newCode = [...tasks]
       newCode[index] = editText
       setTasks(newCode)
       setEditIndex(null)
       setEditText("")
    }
    const dle =(index)=>{
          setTasks(pre=>pre.filter((k,i)=> !i == index))
    }
  return (
    <div>
     <input type="text" onChange={(e)=>setTaskInput(e.target.value)}/>
     <button onClick={()=>setTasks((pre)=>[...pre,taskInput])}>add</button>
     <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {index === editIndex ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => save(index)}>Save</button>
            </>
          ) : (
            <>
              {task}
              <button onClick={() => edit(task, index)}>Edit</button>
              <button onClick={()=>dle(index)}>dle</button>
            </>
          )}
        </li>
      ))}
    </ul>


    </div>
  )
}

export default TodoList