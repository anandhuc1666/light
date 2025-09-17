import React, { useState } from 'react'
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
import Todo from './Todo/Todo'
import Color from './Color'
import Emage from './Image/Emage'
import Emage2 from './Image/Emage2'
import AppEmage from './Image/AppEmage'
import CountMul from './workTime/CountMul'
import { NewTheme } from './hod/Createhod1'
import Colorlight from './ColorCode/Colorlight'
import { TextContext } from './PassData/CreateContext'
import Pass1 from './PassData/Pass1'
import Pass2 from './PassData/Pass2'

function App() {
  const [text,setText]=useState('')
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

{/* <AppEmage/>
<Todo/> */}
<CountMul/>
<NewTheme/>
<Colorlight/>
<TextContext.Provider value={{text,setText}}>
  <Routes>
  <Route path='/' element={<Pass2/>}/>
  <Route path='/Pass1' element={<Pass1/>}/>
</Routes>
</TextContext.Provider>


    </div>
  )
}

export default App