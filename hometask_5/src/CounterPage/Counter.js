import React, { useCallback, useState } from 'react';
import Buttons from './Buttons';

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(true);

    const increment = useCallback(() => {
        setCount(count => count + 1)
    }, []);

    const decrement = useCallback(() => {
        setCount(count => count - 1)
    }, []);

    const changeColor = useCallback(() => {
        setColor(color => !color)
    }, []);
    
    return (
          <div className='Counter'>
              <p>Counter Page</p>
                <p style={{color: color ? 'green': 'red'}}>{count}</p>
                <Buttons increment={increment} decrement={decrement} changeColor={changeColor}/>
          </div>
    );
}
export default Counter