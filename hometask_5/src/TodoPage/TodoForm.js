import React, {useState} from 'react';

 function TodoForm({ addTask }) {
    console.log('Form render')
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.currentTarget.value)
        console.log('HandleChange')
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(input)
        setInput("")
        console.log('Submit render')
    };

  return (
    <div className='TodoForm'>
        <form onClick={handleSubmit}>
            <input type="text"u value={input} onChange={handleChange} placeholder='Put a todo'/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  );
}
export default TodoForm