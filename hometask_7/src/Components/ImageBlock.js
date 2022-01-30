import React from 'react';
import { useSelector } from 'react-redux';

export default function ImageBlock() {
  const image = useSelector(state => (state));
  console.log(image)
  return (
      <div>
          <img src={image} alt='Random'></img>
      </div>
  );
}
