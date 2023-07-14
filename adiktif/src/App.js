import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/home';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
