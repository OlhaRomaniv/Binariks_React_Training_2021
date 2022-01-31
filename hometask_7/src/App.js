import React, { Suspense } from 'react';
import './App.css';

const ImageBlock = React.lazy(()=> import ('./Components/ImageBlock'));
const ChangeImage = React.lazy(()=> import ('./Components/ChangeImage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading...</h3>}>
        <ImageBlock/>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <ChangeImage/>
      </Suspense>
    </div>
  );
}

export default App;
