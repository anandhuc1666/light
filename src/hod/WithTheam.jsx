import React, { useState } from 'react'

// HOC
const WithTheam = (WrappedComponent) => {
  return () => {
    const [theme, setTheme] = useState(false);

    return (
      <div 
        onMouseOver={() => setTheme(true)} 
        onMouseOut={() => setTheme(false)} 
        style={{ background: theme ? 'yellow' : 'transparent', padding: '10px' }}
      >
        <WrappedComponent />
      </div>
    );
  };
};

export default WithTheam;
