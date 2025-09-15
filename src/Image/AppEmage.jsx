import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Emage from './Emage'
import Emage2 from './Emage2'

function AppEmage() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Emage2/>}/>
            <Route path='/page' element={<Emage/>}/>
        </Routes>
    </div>
  )
}

export default AppEmage