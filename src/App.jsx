import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';



const Home = lazy(() => import('./Home'));
const Part1 = lazy(() => import('./Form/Part1'));
const Downloadpage = lazy(() => import('./Download/Downloadpage'));
const Dashboard=lazy(()=>import('./Dashboard/Dashboad'))
function App() {
  return (
   
    
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/Dashboard" 
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard/>
            </Suspense>
          } 
        /> 
        <Route 
          path="/Part1" 
          element={
            <Suspense fallback={<Loader />}>
              <Part1 />
            </Suspense>
          } 
        /> 
        <Route 
          path="/Part1/Downloadpage" 
          element={
            <Suspense fallback={<Loader />}>
              <Downloadpage />
            </Suspense>
          } 
        /> 
      </Routes>
    </div>
  );
}

export default App;
