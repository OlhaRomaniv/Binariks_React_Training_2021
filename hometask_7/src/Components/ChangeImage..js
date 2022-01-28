import React from 'react';

function changeImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data.json())
};
export default function ChangeImage() {
  return (
      <div>
          <button onClick={changeImage}>Change</button>
      </div>
  );
}
