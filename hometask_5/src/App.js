import './App.css';
import React, { Suspense } from 'react';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TodoList = React.lazy(()=> import ('./TodoPage/TodoList'))
function App() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
    </Suspense>
  </div>
  );
}

export default App;
