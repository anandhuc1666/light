import React, { useState } from 'react'

function Todo() {
    const[text,setText]=useState([])
    const[todos,setTodos]=useState('')
     const [editIndex, setEditIndex] = useState(null); 
    const handle =(e)=>{
         e.preventDefault()
         setTodos([...todos,text])
    }
    const remove =(k)=>{
        setTodos(todos.filter((m,r)=>r !== k))
    }
    const edit =(k)=>{
    setText(todos[k]);  
    setEditIndex(k)
    }
  return (
    <div>
     <input type="text" placeholder='enter text on there' value={text} onChange={(e)=>setText(e.target.value)}/>
     <button onClick={handle}>send</button>
     <ul>
        {
            todos&&
            todos.map((i,k)=>(
                <li key={k}>{i} <button onClick={()=>remove(k)}>dle</button><button onClick={()=>edit(k)}>edit</button></li>
            ))
        }
     </ul>
    </div>
  )
}

export default Todo