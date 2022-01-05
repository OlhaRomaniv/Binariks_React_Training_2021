
import React, {useState, useEffect, useRef} from 'react';
import './Child.scss'
export default function Child(props) {
    const ref = useRef(null);
    useEffect(() => {
        if (props.randomNumber>props.prevState) {
          ref.current.classList = 'One'
        }else if (props.randomNumber<props.prevState){
            ref.current.classList = 'Two'
        }
      });
    return (
        <div className='Wrapper'>
        <div ref={ref}>
            <p>{props.randomNumber}</p>
        </div>
        </div>
    )
}
