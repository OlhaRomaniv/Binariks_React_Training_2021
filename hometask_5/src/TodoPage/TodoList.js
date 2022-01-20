import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTask = (input) => {
        if(input) {
          const newItem = {
            id: Math.floor(Math.random() * 10000),
            task: input,
            complete: false
          }
          setTodos([...todos, newItem])
        }
      };

      const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
      };

    return (
    <div className='TodoList'> 
<TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            />
        )
      })}
    </div>
    );
}