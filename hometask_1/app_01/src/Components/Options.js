
import React from 'react'
import './Options.css'
export default function Selectors(props) {
  return (
    <div className='Options-main'>
      <div className='Options-select'>
        <h4>Options:</h4>
      <select onChange = {(event) =>{
    props.handler(event.target.value)
      }}>
                   <option>Description 1</option>
                   <option>Description 2</option>
                  <option>Description 3</option>
                  <option>Description 4</option>
                  <option>Description 5</option>
          </select>
          </div>
          <button onClick={props.clear}>Change to initial</button>
    </div>
  )
}