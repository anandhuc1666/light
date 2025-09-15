// import React from 'react'

// const  Emage2 = React.memo(({name})=>{
//     // “Only re-render this component if its props actually changed.”
//     console.log(name)
//   return (
//    <h2>{name}</h2>
//   )
// })

// export default Emage2
import React from 'react'

const Emage2 = React.memo (({count})=>{
    console.log(`page2:${count}`)
  return (
    <div>Emage2
        <h2>{`number count is: ${count}`}</h2>
    </div>

  )
})

export default Emage2