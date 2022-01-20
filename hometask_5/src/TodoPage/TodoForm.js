import React, {useState} from 'react';

export default function TodoForm({ addTask }) {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(input)
        setInput("")
    }
  return (
  <div className='TodoForm'>
      <form onClick={handleSubmit}>
          <input type="text"u value={input} onChange={handleChange} placeholder='Put a todo'/>
          <button onClick={handleSubmit}>Add</button>
      </form>
  </div>
  );
}
