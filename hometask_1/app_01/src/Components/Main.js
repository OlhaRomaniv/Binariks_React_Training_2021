
import "./Main.css";
import React, {useState, useEffect} from 'react';
import Options from './Options';

export default function Main() {
  const [description, setDescription] = useState('Initial Description')
   useEffect(() => {
   const data = window.localStorage.getItem('selected')
    setDescription(JSON.parse(data))
   }, [])
   useEffect(() => {
     window.localStorage.setItem('selected', JSON.stringify(description))
   })
  return (
      <div className='Main'>
        <header className="Main-header">
          <h2>Select the description</h2>
        </header>
        <h1>{description}</h1>
        <Options handler = {(description) =>{
    setDescription(description)}} clear = {()=> setDescription('Initial Description')}/>
      </div>
  )
}

