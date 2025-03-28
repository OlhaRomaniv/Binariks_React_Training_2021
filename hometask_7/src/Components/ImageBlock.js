import React from 'react';
import { useSelector} from 'react-redux';

function ImageBlock() {
  const randomImage = useSelector(state => state);
  return (
      <div className='Image'>
          <img src={randomImage} alt="random image"/>
      </div>
  );
}
export default ImageBlock
