import React, {useState, useEffect} from 'react';
import Child from './Child'
export default function Parent() {
  const [number, setNumber] = useState(0);
  useEffect(() => {setInterval(() => {
    setNumber(Math.floor((Math.random() * 100) + 1))
    }, 5000);
    return () => clearTimeout(number);
  }, []);
  return(
    <div>
      <Child randomNumber = {number}/>
    </div>
  )
}
