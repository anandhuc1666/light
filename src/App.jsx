import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Prop from './Promise/Prop'
import Prop2 from './Promise/Prop2'
import Prop3 from './Promise/Prop3'
import Context from './Context/Context'
import Context2 from './Context/Context2'
import Light1 from './Traffic/Light1'
import Light2 from './Traffic/Light2'


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Prop/>}/>
        <Route path='/Prop2' element={<Prop2/>}/>
        <Route path='/:Prop3' element={<Prop3/>}/>
        <Route path='/' element={<Context/>}/>
        <Route path='/Context2' element={<Context2/>}/>
        <Route path='/Context3' element={<Context3/>}/>
      </Routes> */}
      {/* <Context2 /> */}
      <Light2/>
    </div>
  )
}

export default App