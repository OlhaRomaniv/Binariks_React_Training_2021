import './App.css';
import React, { Suspense } from 'react';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TodoList = React.lazy(()=> import ('./TodoPage/TodoList'));
const Counter = React.lazy(() => import ('./CounterPage/Counter'));
function App() {
  return (
    <div  className='App'>
    <Router>
      <div className='Links'>
          <Link to='/TodoPage/TodoList'>ToDo</Link>
          <Link to='/CounterPage/Counter'>Counter</Link>
      </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route path='/TodoPage/TodoList' element={<TodoList/>} />
            <Route path='/CounterPage/Counter' element={<Counter/>} />
          </Routes>
        </Suspense>
    </Router>
    </div>
  )
}

export default App;
