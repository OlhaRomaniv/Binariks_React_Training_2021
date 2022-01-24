import React, { memo } from 'react';

function Buttons({changeColor, increment, decrement}) {
  return (
      <div className='Buttons'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={changeColor}>Change color</button>
      </div>
  )
}
export default memo(Buttons)
