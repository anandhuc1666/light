import React from 'react'

const  Emage2 = React.memo(({name})=>{
    // “Only re-render this component if its props actually changed.”
    console.log(name)
  return (
   <h2>{name}</h2>
  )
})

export default Emage2