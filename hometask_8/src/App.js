import React, { Suspense } from 'react';
import './App.css'
import { Oval } from  'react-loader-spinner'

const Users = React.lazy(() => import('./features/users/Users'))

function App() {
  return (
    <div className="App">
       <Suspense fallback={<Oval/>}>
          <Users/>
      </Suspense>
    </div>
  );
}

export default App;
