import React, { useState, useEffect } from 'react';
import './App.css'

function useMobileCheck() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", resizeWidth);
        return () => {
            window.removeEventListenerr("resize", resizeWidth);
        }
    }, []);
    return width < 425 ? "true" : "false";
}

function App() {
    const isMobile = useMobileCheck();
    return (
        <div className="App">
            <h1>Device is mobile: {isMobile}.</h1>
        </div>
    );
}

export default App;