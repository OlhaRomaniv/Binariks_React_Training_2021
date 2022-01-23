import React, { useCallback, useState } from 'react';
import Buttons from './Buttons';
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(true);

    const increment = useCallback(() => {
        setCount(count => count + 1)
        console.log('increment render')
    }, []);

    const decrement = useCallback(() => {
        setCount(count => count - 1)
        console.log('decrement render')
    }, []);

    const changeColor = useCallback(() => {
        setColor(color => !color)
        console.log('color render')
    }, []);

    console.log('parent render')
    return (
          <div className='Counter'>
                <div style={{color: color ? 'green': 'red'}}>{count}</div>
                <Buttons increment={increment} decrement={decrement} changeColor={changeColor}/>
          </div>
    );
}
export default Counter