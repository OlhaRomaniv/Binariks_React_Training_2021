
import React, {useState, useEffect, useRef} from 'react';
import './Child.css'
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
        <div /*className= {props.prevState>props.randomNumber ? 'One':'Two'}*/ ref={ref}>
            <p>{props.randomNumber}</p>
        </div>
    )
}
