import React, { useState } from 'react'

function WithTheam=(WrapedComponent)=> {

    return () => {
        <>
            const[theme,setTheme]=useState(false)
            <div onMouseOver={() => setTheme(true)} style={{ background: theme ? 'yellow' : {} }}></div>
            return <WrapedComponent />
        </>
    }
}

export default WithTheam