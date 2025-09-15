import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Emage from './Emage'
import Emage2 from './Emage2'
import { CreateText } from './CreateEmage'
import { useState } from 'react'

function AppEmage() {
    const [text, setText] = useState ('')
    return (
        <div>
            <CreateText.Provider value={{text, setText}}>
                <Routes>
                    <Route path='/' element={<Emage2 />} />
                    <Route path='/page' element={<Emage />} />
                </Routes>
            </CreateText.Provider>

        </div>
    )
}

export default AppEmage