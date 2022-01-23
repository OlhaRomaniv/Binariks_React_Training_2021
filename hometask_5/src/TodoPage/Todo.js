import React from 'react';

function Todo({todo, removeTask}) {
  console.log('A todo render')
  return (
  <div key={todo.id}>
      <div>{todo.task}</div>
      <div  onClick={() => removeTask(todo.id)}> X</div>
  </div>
  );
}
export default Todo