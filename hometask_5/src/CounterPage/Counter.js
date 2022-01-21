import React, { useCallback, useState } from 'react';
import Buttons from './Buttons'

// function reducer(state, action){
//     switch(action.type ){
//         case 'increment':
//             return{
//                 count: state.count + action.number,
//             };
//         case 'decrement':
//             return{
//                 count: state.count - action.number,
//             };
//     }
// };
// const increment = (number) =>{
//     return{
//         type:'increment',
//         number
//     }
// };

// const decrement = (number) =>{
//     return{
//         type:'decrement',
//         number
//     }
// }
export default function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('true');

const increment = useCallback(() =>{
    setCount(count => count + 1)
}, []);

const decrement = useCallback(() =>{
    setCount(count => count - 1)
}, []);

const changeColour = useCallback(() =>{
    setColor(color => !color)
}, []);

  return (
  <div>
        <div>{count}</div>
        <Buttons increment={increment} decrement={decrement} colour={changeColour}/>
  </div>
  );
}
