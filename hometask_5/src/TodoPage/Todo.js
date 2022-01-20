import React from 'react';

export default function Todo({todo, removeTask}) {
  return (
  <div key={todo.id}>
<div>{todo.task}</div>
<div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
  </div>
  );
}
