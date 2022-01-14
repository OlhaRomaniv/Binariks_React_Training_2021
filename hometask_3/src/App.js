import React, { useState, useEffect } from 'react';
import './App.css'

function useMobileCheck() {
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
    return width < 450 ? "true" : "false";
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