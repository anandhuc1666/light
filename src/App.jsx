import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Prop from './Promise/Prop'
import Prop2 from './Promise/Prop2'
import Prop3 from './Promise/Prop3'
import Context from './Context/Context'
import Context2 from './Context/Context2'
import Light1 from './Traffic/Light1'
import Light2 from './Traffic/Light2'
import Timer from './Timer/Timer'
import Timer2 from './Timer/Timer2'
import Word from './FindWord/Word'
import Word2 from './FindWord/Word2'
import Text from './Text/Text'
import CountApp from './Redux/CountApp'
import { Store } from './Redux/Store'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
// import Final from './Final/Final'
// import Time from './Final/Time'
import Props1 from './props/Props1'
import Pros2 from './props/Pros2'
import Time from './Finds/Time'
import Todo from './Todo'
import Color from './Color'
import Emage from './Image/Emage'


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
      {/* <Light2/> */}
      {/* <Timer2/> */}
      {/* <Word2/> */}
      {/* <Text/> */}
{/* 
  
  <Provider store={Store}>
    <CountApp />
  </Provider> */}
  {/* <Final/>
  <Time/> */}
  {/* <Todo/>
  <Color/>
<Routes>
  <Route path="/" element={<Props1 />} />
  <Route path="/:text" element={<Pros2 />} />
</Routes>
<Time/> */}
 <Emage/>
    </div>
  )
}

export default App