import React, { useContext } from 'react'
import MyContext from './context'

function O2() {
  const values = useContext(MyContext)

  if (!values) {
    return <p>No values provided in context!</p>
  }

  return (
    <div>
      <h3>List from Context:</h3>
      <ul>
        {values.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default O2

