import React, { Suspense, lazy } from 'react';
import './App.css';
import { Loader } from './view/loader';

const Home = lazy(() => import('./view/home'));


function App() {
  return (
   <>
   <Suspense  fallback={<Loader/>}>
     <Home/>
   </Suspense>
   </>
  );
}

export default App;
