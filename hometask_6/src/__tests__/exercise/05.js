// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
function Counter(){
 const {count, increment, decrement} = useCounter()
 return (
   <div>
     <h3>Current count: {count}</h3>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
   </div>
 );
};

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  render(<Counter/>);
  const decrement = screen.getByText('Decrement');
  const increment = screen.getByText('Increment');
  const message = screen.getByText('Current count: 0');

  expect(message).toHaveTextContent('Current count: 0');
  userEvent.click(increment);
  expect(message).toHaveTextContent('Current count: 1');
  userEvent.click(decrement);
  expect(message).toHaveTextContent('Current count: 0');
})

/* eslint no-unused-vars:0 */
