// import React from 'react'

// const  Emage2 = React.memo(({name})=>{
//     // “Only re-render this component if its props actually changed.”
//     console.log(name)
//   return (
//    <h2>{name}</h2>
//   )
// })

// export default Emage2
// import React from 'react'

// const Emage2 = React.memo (({count})=>{
//     console.log(`page2:${count}`)
//   return (
//     <div>Emage2
//         <h2>{`number count is: ${count}`}</h2>
//     </div>

//   )
// })

// export default Emage2
// import React from 'react'
// import { useParams } from 'react-router-dom'

// function Emage2() {
//   const { id } = useParams()
//   return (
//     <div>
//       Emage2
//       <h2>{id}</h2>
//     </div>
//   )
// }

// export default Emage2
import React, { useContext, useState } from 'react'
import { CreateText } from './CreateEmage'
import { Link } from 'react-router-dom'

function Emage2() {
const{text, setText}=useContext(CreateText)
  return (
    <div>
    <h2>{text}</h2>
    <input type="text" onChange={(e)=>setText(e.target.value)}/>
    <Link to={'/page'}>next page2</Link>
    </div>
  )
}

export default Emage2