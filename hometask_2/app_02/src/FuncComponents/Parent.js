import React, {useState, useEffect, useRef} from 'react';
import Child from './Child'
export default function Parent() {
  const [number, setNumber] = useState(0);
  const prevNumber = useRef(0);
  
  useEffect(()=>{
    prevNumber.current = number
  },[number]
  )
  useEffect(() => {setInterval(() => {
    setNumber(Math.floor((Math.random() * 100) + 1))
    }, 5000);
    return () => clearTimeout(number);
  }, []);
  return(
    <div>
      <Child randomNumber = {number} prevState = {prevNumber.current}/>
    </div>
  )
}
