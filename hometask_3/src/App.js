import React, { useState, useEffect } from 'react';

function useMobileSize() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListenerr("resize", resize);
        }
    }, []);
    return width < 450 ? "true": "false";
}

function App() {
    const isMobile = useMobileSize();
    return (
        <div className="App">
        <p>Device is mobile: {isMobile}.</p>
         </div>
    );
}

export default App;