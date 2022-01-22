import React, { useCallback, useState, memo } from 'react';
import Buttons from './Buttons';

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
 function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(true);

const increment = useCallback(() =>{
    setCount(count => count + 1)
    console.log('increment render')
}, []);

const decrement = useCallback(() =>{
    setCount(count => count - 1)
    console.log('decrement render')
}, []);

const changeColor = useCallback(() =>{
    setColor(color => !color)
    console.log('color render')
},[]);
    console.log('parent render')
  return (
  <div>
        <div>{count}</div>
        <Buttons increment={increment} decrement={decrement} changeColor={changeColor}/>
  </div>
  );
}
export default Counter