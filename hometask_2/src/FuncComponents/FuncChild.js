
import React, {useEffect, useRef} from 'react';
import '../Styles/Child.scss';
export default function Child( {randomNumber, prevState}) {
    const ref = useRef(null);
    useEffect(() => {
        if (randomNumber > prevState) {
          ref.current.classList = 'One';
        }else if (randomNumber < prevState){
            ref.current.classList = 'Two';
        }
      });
    return (
        <div className='Wrapper'>
            <div ref={ref}>
                <p>{randomNumber}</p>
            </div>
        </div>
    )
}
