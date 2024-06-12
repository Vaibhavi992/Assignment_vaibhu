import './App.css';
import React, { Fragment, Suspense,lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Create a delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Lazy load components with a delay
const lazyWithDelay = (importFunc, delayTime) => {
  return React.lazy(() =>
    delay(delayTime).then(() => importFunc())
  );
};

const Index = lazyWithDelay(() => import('./admin/pages/Index'), 2000);
const Blank = lazyWithDelay(() => import('./admin/pages/Blank'), 2000);
const Uipage = lazyWithDelay(() => import('./admin/pages/Uipage'), 2000);

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center" style={{marginTop:'150px'}}><i className="fa fa-spinner fa-spin" style={{ fontSize: '25px' , color :'red',alignItems:'center' }}></i> Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/uipage" element={<Uipage/>}></Route>
            <Route path="/blank" element={<Blank/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
