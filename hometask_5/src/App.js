import './App.css';
import React, { Suspense } from 'react';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TodoList = React.lazy(()=> import ('./TodoPage/TodoList'));
const Counter = React.lazy(() => import ('./CounterPage/Counter'));
function App() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Counter />
    </Suspense>
  </div>
  );
}

export default App;
