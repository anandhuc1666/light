import React from 'react'
import MyContext from './context';
import O2 from './O2';

function O1() {
    const data = ["aa", "aba", "bcca", "bbb", "bmp"];
    return (
        <MyContext.Provider value={data}>
            <div style={{ background: 'gray', width: 100, height: 'auto', color: 'white', padding: '20px', boxSizing: 'border-box' }}>
                <O2/>
            </div>
        </MyContext.Provider>

    )
}

export default O1