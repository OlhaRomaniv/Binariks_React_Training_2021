// Simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react';
import Counter from '../../components/counter'

// 💣 if you use beforeEach for removing the div from the page, you can remove beaforeEach. 
// React Testing Library does this automatically!

test('counter increments and decrements when the buttons are clicked', () => {
  // 💣 remove your created div, React Testing Library will create the div for you

  // 🐨 swap ReactDOM.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  const {container} = render(<Counter />)
  const [decrement, increment] = container.querySelectorAll('button') // – it's the possible way
  // how you find your buttons
  // 🐨 instead of `div` to find DOM nodes you'll want to use the `container` you get back
  // from React Testing Library
  const message = container.firstChild.querySelector('div');
  // 🐨 get a reference to the message div:
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(message.textContent).toBe('Current count: 0');
  // 🐨 replace the next .click() statements with `fireEvent.click(button)`
  fireEvent.click(increment);
  expect(message.textContent).toBe('Current count: 1');
  // 🐨 assert the message.textContent
  fireEvent.click(decrement);
  expect(message.textContent).toBe('Current count: 0');
  // 🐨 assert the message.textContent
  
})
