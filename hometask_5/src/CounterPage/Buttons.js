import React from 'react';

export default function Buttons({increment, decrement, colour}) {
  return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={colour}>Change color</button>
      </div>
  )
}
