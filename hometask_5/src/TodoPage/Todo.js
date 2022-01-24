import React from 'react';

function Todo({todo, removeTodo}) {
  return (
  <div className='TodoItem' key={todo.id}>
      <div className='Remove' onClick={() => removeTodo(todo.id)}> X</div>
      <div>{todo.task}</div>
  </div>
  );
}
export default Todo