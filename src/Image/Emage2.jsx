import React from 'react'

const  Emage2 = React.memo(({name})=>{
    console.log(name)
  return (
   <h2>{name}</h2>
  )
})

export default Emage2