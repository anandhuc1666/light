import React from 'react'
import { useParams } from 'react-router-dom'

function Prop3() {
    const {Prop3} = useParams()
  return (
    <div>Prop3
        <h2>{Prop3}</h2>
    </div>
  )
}

export default Prop3