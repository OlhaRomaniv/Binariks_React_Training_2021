import React, {useState, Suspense} from 'react';
import TodoForm from './TodoForm';

const Todo = React.lazy(() => import ('./Todo'));

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (input) => {
        if(input) {
          const newTodo = {
            id: Math.floor(Math.random() * 100),
            task: input
          }
          setTodos([...todos, newTodo])
        }
      };

      const removeTodo = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
      };

      const listItems = todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            />
        )
      });

    return (
      <div className='TodoList'> 
      <p>Todo page</p>
        <TodoForm addTodo={addTodo} />
        <Suspense fallback={<div>Loading...</div>}>
          {listItems}
        </Suspense>
      </div>
    );
}