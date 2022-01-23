import React, {useState, Suspense} from 'react';
import TodoForm from './TodoForm'

const Todo = React.lazy(() => import ('./Todo'));

export default function TodoList() {
  console.log('List render')
    const [todos, setTodos] = useState([]);
    
    const addTask = (input) => {
      console.log('Add task render')
        if(input) {
          const newTodo = {
            id: Math.floor(Math.random() * 100),
            task: input
          }
          setTodos([...todos, newTodo])
        }
      };

      const removeTask = (id) => {
        console.log('Remove render')
        setTodos([...todos.filter((todo) => todo.id !== id)])
      };

      const listItems = todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
            />
        )
      });

    return (
      <div className='TodoList'> 
        <TodoForm addTask={addTask} />
        <Suspense fallback={<div>Loading...</div>}>
          {listItems}
        </Suspense>
      </div>
    );
}